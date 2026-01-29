// Profile Update System
// Handles member profile updates with Firebase Firestore and Firebase Storage photo uploads
// Requires common.js to be loaded first (for POSITION_OPTIONS and getCommitteeFolder)

let currentMember = null;
let selectedFile = null;

// Get token from URL
function getTokenFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('token');
}

// Load member profile on page load
document.addEventListener('DOMContentLoaded', function() {
  loadProfile();
  setupEventListeners();
});

// Load and display member profile
async function loadProfile() {
  const token = getTokenFromURL();
  
  if (!token) {
    showInvalidToken();
    return;
  }
  
  // Fetch member from Firestore by token
  currentMember = await getMemberByToken(token);
  
  if (!currentMember) {
    showInvalidToken();
    return;
  }
  
  // Populate form with current data
  populateForm();
  
  // Show form
  document.getElementById('loading').style.display = 'none';
  document.getElementById('profile-form-container').style.display = 'block';
}

// Populate form with member data
function populateForm() {
  document.getElementById('name').value = currentMember.name;
  document.getElementById('email').value = currentMember.email;
  document.getElementById('major').value = currentMember.major;
  document.getElementById('year').value = currentMember.year;
  document.getElementById('committee').value = currentMember.committee;
  
  // Update position dropdown based on committee
  updatePositionOptions(currentMember.committee, currentMember.position);
  
  document.getElementById('bio').value = currentMember.bio || '';
  document.getElementById('member-email').textContent = currentMember.email;
  
  // Load current photo
  const photoImg = document.getElementById('current-photo');
  photoImg.src = currentMember.photoPath;
  photoImg.onerror = () => {
    photoImg.src = 'images/other/nopic.png';
  };
  
  // Update bio character count
  updateBioCount();
}

// Show invalid token message
function showInvalidToken() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('invalid-token').style.display = 'block';
}

// Setup event listeners
function setupEventListeners() {
  // Bio character counter
  const bioInput = document.getElementById('bio');
  bioInput.addEventListener('input', updateBioCount);
  
  // File input handler
  document.getElementById('photo').addEventListener('change', handleFileSelect);
  
  // Committee change handler
  const committeeSelect = document.getElementById('committee');
  committeeSelect.addEventListener('change', function() {
    updatePositionOptions(this.value);
  });
  
  // Form submission
  document.getElementById('update-form').addEventListener('submit', handleFormSubmit);
}

// Update position options based on committee
function updatePositionOptions(committee, currentPosition = '') {
  const positionGroup = document.getElementById('position-group');
  const positionSelect = document.getElementById('position');
  
  if (committee === 'alumni') {
    // Hide position field for alumni
    positionGroup.style.display = 'none';
    positionSelect.removeAttribute('required');
  } else {
    // Show position field
    positionGroup.style.display = 'block';
    positionSelect.setAttribute('required', 'required');
    
    // Clear current options
    positionSelect.innerHTML = '<option value="">Select position</option>';
    
    // Add options for selected committee
    const options = POSITION_OPTIONS[committee] || [];
    options.forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = position;
      positionSelect.appendChild(option);
    });
    
    // Set current position if provided
    if (currentPosition) {
      positionSelect.value = currentPosition;
    }
  }
}

// Update bio character count
function updateBioCount() {
  const bio = document.getElementById('bio');
  const count = document.getElementById('bio-count');
  const length = bio.value.length;
  
  count.textContent = length;
  
  if (length > 500) {
    bio.value = bio.value.substring(0, 500);
    count.textContent = 500;
  }
}

// Handle file selection
function handleFileSelect(e) {
  const file = e.target.files[0];
  
  if (!file) return;
  
  // Validate file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    showError('File size must be less than 5MB');
    e.target.value = '';
    return;
  }
  
  // Validate file type
  if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    showError('Only JPG and PNG files are allowed');
    e.target.value = '';
    return;
  }
  
  selectedFile = file;
  document.getElementById('file-name').textContent = `Selected: ${file.name}`;
  
  // Show preview
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('current-photo').src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Handle form submission
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ Saving...';
  
  try {
    // Collect form data
    const committee = document.getElementById('committee').value;
    const profileData = {
      id: currentMember.id,
      name: document.getElementById('name').value,
      major: document.getElementById('major').value,
      year: document.getElementById('year').value,
      bio: document.getElementById('bio').value,
      email: document.getElementById('email').value,
      committee: committee,
      photoPath: currentMember.photoPath,
      lastUpdated: firebase.firestore.Timestamp.now()
    };
    
    // Add position only if not alumni
    if (committee !== 'alumni') {
      profileData.position = document.getElementById('position').value;
    }
    
    // Upload photo to Firebase Storage if selected
    if (selectedFile) {
      submitBtn.textContent = '⏳ Uploading photo...';
      const photoURL = await uploadPhotoToFirebaseStorage(selectedFile);
      profileData.photoPath = photoURL;
    }
    
    // Save to Firestore
    submitBtn.textContent = '⏳ Saving to database...';
    await saveToFirestore(profileData);
    
    // Show success
    showSuccess();
    
    // Reload page after 2 seconds to show updated data
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    
  } catch (error) {
    console.error('Update failed:', error);
    showError('Failed to update profile: ' + error.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '💾 Save Changes';
  }
}

// Upload photo to Firebase Storage
async function uploadPhotoToFirebaseStorage(file) {
  const storage = window.storage;
  
  if (!storage) {
    throw new Error('Firebase Storage not initialized');
  }
  
  // Use shared function from common.js
  const committeeFolder = getCommitteeFolder(currentMember.committee);
  
  const fileName = `${currentMember.id}.jpg`;
  const storagePath = `photos/${committeeFolder}/${fileName}`;
  
  // Create reference to file location
  const storageRef = storage.ref(storagePath);
  
  // Upload file with metadata
  const metadata = {
    contentType: file.type,
    customMetadata: {
      'memberId': currentMember.id,
      'memberName': currentMember.name,
      'committee': currentMember.committee,
      'uploadedAt': new Date().toISOString()
    }
  };
  
  // Upload the file
  await storageRef.put(file, metadata);
  
  // Get the download URL
  const downloadURL = await storageRef.getDownloadURL();
  
  return downloadURL;
}

// Fetch member data by token from Firestore
async function getMemberByToken(token) {
  try {
    const snapshot = await window.db.collection('members')
      .where('token', '==', token)
      .limit(1)
      .get();
    
    if (snapshot.empty) {
      return null;
    }
    
    // Get member data and add the document ID
    const memberData = snapshot.docs[0].data();
    memberData.id = snapshot.docs[0].id;  // Add the Firestore document ID
    
    return memberData;
  } catch (error) {
    console.error('Error fetching member by token:', error);
    return null;
  }
}

// Save profile data to Firestore
async function saveToFirestore(profileData) {
  const db = window.db;
  
  if (!db) {
    throw new Error('Firebase not initialized');
  }
  
  await db.collection('members').doc(currentMember.id).set(profileData, { merge: true });
}

// Show success message
function showSuccess() {
  const successMsg = document.getElementById('success-message');
  successMsg.style.display = 'block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 5000);
}

// Show error message
function showError(message) {
  const errorMsg = document.getElementById('error-message');
  errorMsg.textContent = message;
  errorMsg.style.display = 'block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setTimeout(() => {
    errorMsg.style.display = 'none';
  }, 5000);
}

// Profile Update System
// Handles member profile updates with Firebase Firestore and GitHub photo uploads

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
function loadProfile() {
  const token = getTokenFromURL();
  
  if (!token) {
    showInvalidToken();
    return;
  }
  
  currentMember = getMemberByToken(token);
  
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
  document.getElementById('position').value = currentMember.position;
  document.getElementById('major').value = currentMember.major;
  document.getElementById('year').value = currentMember.year;
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
  
  // Form submission
  document.getElementById('update-form').addEventListener('submit', handleFormSubmit);
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
    const profileData = {
      id: currentMember.id,
      name: document.getElementById('name').value,
      position: document.getElementById('position').value,
      major: document.getElementById('major').value,
      year: document.getElementById('year').value,
      bio: document.getElementById('bio').value,
      email: currentMember.email,
      committee: currentMember.committee,
      photoPath: currentMember.photoPath,
      lastUpdated: firebase.firestore.Timestamp.now()
    };
    
    // Upload photo to GitHub if selected
    if (selectedFile) {
      submitBtn.textContent = '⏳ Uploading photo...';
      const photoPath = await uploadPhotoToGitHub(selectedFile);
      profileData.photoPath = photoPath;
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

// Upload photo to GitHub repository
async function uploadPhotoToGitHub(file) {
  const fileName = `${currentMember.id}.jpg`;
  // Map committee to folder name
  const committeeFolder = {
    'executive': 'xcom',
    'campus-outreach': 'cam',
    'academic': 'com',
    'new-student-outreach': 'nco'
  }[currentMember.committee] || 'other';
  
  const filePath = `images/${committeeFolder}/${fileName}`;
  
  // Convert file to base64
  const base64 = await fileToBase64(file);
  const content = base64.split(',')[1]; // Remove data URL prefix
  
  // Get current file SHA if it exists (needed for updating)
  let sha = null;
  try {
    const getResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
    }
  } catch (error) {
    // File doesn't exist yet, that's okay
    console.log('Photo will be created as new file');
  }
  
  // Upload or update file
  const uploadData = {
    message: `Update profile photo for ${currentMember.name}`,
    content: content,
    branch: GITHUB_CONFIG.branch || 'main'
  };
  
  if (sha) {
    uploadData.sha = sha;
  }
  
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData)
    }
  );
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`GitHub upload failed: ${error.message}`);
  }
  
  return `images/${committeeFolder}/${fileName}`;
}

// Save profile data to Firestore
async function saveToFirestore(profileData) {
  const db = window.db;
  
  if (!db) {
    throw new Error('Firebase not initialized');
  }
  
  await db.collection('members').doc(currentMember.id).set(profileData, { merge: true });
}

// Convert file to base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
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

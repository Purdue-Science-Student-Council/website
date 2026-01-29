// Load members from Firestore and display them
async function addComm() {
  var page = document.getElementById("js-council");
  
  // Show loading message
  page.innerHTML = '<p style="text-align: center; padding: 20px;">Loading council members...</p>';
  
  try {
    // Check if Firebase is initialized
    if (!window.db) {
      console.error('Firebase not initialized');
      // Fall back to hardcoded data
      addCommFallback();
      return;
    }
    
    // Fetch all members from Firestore
    const membersSnapshot = await window.db.collection('members').get();
    
    if (membersSnapshot.empty) {
      console.warn('No members found in Firestore, using fallback data');
      addCommFallback();
      return;
    }
    
    // Group members by committee
    const membersByCommittee = {
      executive: [],
      'campus-outreach': [],
      'community-outreach': [],
      'networking-career-outreach': [],
      alumni: []
    };
    
    membersSnapshot.forEach(doc => {
      const member = doc.data();
      // Ensure member has an ID from Firestore document
      member.id = doc.id;
      const committee = member.committee || 'executive';
      if (membersByCommittee[committee]) {
        membersByCommittee[committee].push(member);
      }
    });
    
    // Clear loading message
    page.innerHTML = '';
    
    // Render each committee
    renderCommittee(page, 'executive', membersByCommittee.executive, 
      'The Executive Committee', 
      'The Executive Committee oversees the other three committees, connects with other Purdue organizations, communicates with faculty, and plans New Student Orientation.');
    
    renderCommittee(page, 'campus-outreach', membersByCommittee['campus-outreach'],
      'Campus Outreach Committee',
      'The Campus Outreach committee provides events to support the College of Science students and faculty. We provide opportunities for students to engage with each other and connect with faculty. Some events we have put on in the past are Game Nights, Tabling free snacks, and Snack&Chats with professors.');
    
    renderCommittee(page, 'community-outreach', membersByCommittee['community-outreach'],
      'Community Outreach Committee',
      'The Community Outreach committee connects the College of Science and PSSC to the greater West Lafayette and Lafayette communities. We strive to support our community through various volunteer initiatives at Food Finders, mentorship with high school students, and "Science Day" at the local library where we perform science experiments with kids.');
    
    renderCommittee(page, 'networking-career-outreach', membersByCommittee['networking-career-outreach'],
      'Networking and Career Outreach Committee',
      'The Networking and Career Outreach committee provides professional growth opportunities. Through partnering with the Campus Outreach committee, we host multiple Snack&Chats to provide a space for students to interact with their STEM professors. Additionally, we provide pre-professional panels for students to learn more about opportunities after college.');
    
    renderCommittee(page, 'alumni', membersByCommittee.alumni,
      'PSSC Alumni',
      'PSSC Alumni are a vital part of PSSC and remain as advisors and friends. They often help in planning and volunteer in events!');
    
  } catch (error) {
    console.error('Error loading members from Firestore:', error);
    addCommFallback();
  }
}

// Sort members based on committee type and position
function sortMembers(members, committeeId) {
  if (committeeId === 'executive') {
    // Executive committee - sort by specific position order
    const positionOrder = {
      'President': 1,
      'Vice President': 2,
      'Secretary': 3,
      'Treasurer': 4,
      'Webmaster': 5,
      'Public Relations Director': 6,
      'Internal Activities Director': 7
    };
    
    return members.sort((a, b) => {
      const orderA = positionOrder[a.position] || 999;
      const orderB = positionOrder[b.position] || 999;
      return orderA - orderB;
    });
  } else if (committeeId === 'alumni') {
    // Alumni - sort alphabetically by name
    return members.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Other committees - Committee Head first, then Members alphabetically
    return members.sort((a, b) => {
      if (a.position === 'Committee Head' && b.position !== 'Committee Head') {
        return -1;
      }
      if (a.position !== 'Committee Head' && b.position === 'Committee Head') {
        return 1;
      }
      // If both are same type (both heads or both members), sort alphabetically
      return a.name.localeCompare(b.name);
    });
  }
}

// Render a single committee section
function renderCommittee(page, committeeId, members, title, description) {
  if (!members || members.length === 0) return;
  
  // Sort members based on committee
  members = sortMembers(members, committeeId);
  
  // Initialize membersData if not exists
  if (!window.membersData) {
    window.membersData = {};
  }
  
  const membersHTML = members.map((member, index) => {
    const photoPath = member.photoPath || 'images/other/nopic.png';
    
    // Store member data with their ID
    window.membersData[member.id] = member;
    
    return `
      <div class="page-council-members-member" style="animation-delay: ${index * 0.1}s" data-member-id="${member.id}">
        <img src="${photoPath}" class="page-council-members-member-img" alt="${member.name}" onerror="this.src='images/other/nopic.png'">
        <h4 class="page-council-members-member-name">${member.name}</h4>
        <h5 class="page-council-members-member-position">${member.position || ''}</h5>
        <h5 class="page-council-members-member-details">${member.year} / ${member.major}</h5>
      </div>
    `;
  }).join('');
  
  page.insertAdjacentHTML('beforeend', `
    <div class="page-council">
      <h3 class="page-council-title">${title}</h3>
      <p class="page-council-text">${description}</p>
      <div class="page-council-members">
        ${membersHTML}
      </div>
    </div>
  `);
  
  // Add intersection observer for scroll animations
  setTimeout(() => {
    observeCards();
    attachMemberCardListeners();
  }, 100);
}

// Intersection Observer for scroll-triggered animations
function observeCards() {
  const cards = document.querySelectorAll('.page-council-members-member');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  cards.forEach(card => {
    // Set initial state for animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
}

// Attach click listeners to member cards
function attachMemberCardListeners() {
  const memberCards = document.querySelectorAll('.page-council-members-member');
  
  memberCards.forEach(card => {
    card.addEventListener('click', function() {
      const memberId = this.getAttribute('data-member-id');
      const member = window.membersData[memberId];
      
      if (member) {
        openMemberModal(member);
      }
    });
  });
}

// Open member modal with data
function openMemberModal(member) {
  const modal = document.getElementById('member-modal');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalPosition = document.getElementById('modal-position');
  const modalYear = document.getElementById('modal-year');
  const modalMajor = document.getElementById('modal-major');
  const modalEmail = document.getElementById('modal-email');
  const modalBioText = document.getElementById('modal-bio-text');
  
  // Populate modal with member data
  modalImg.src = member.photoPath || 'images/other/nopic.png';
  modalImg.alt = member.name;
  modalImg.onerror = function() { this.src = 'images/other/nopic.png'; };
  
  modalName.textContent = member.name;
  modalPosition.textContent = member.position || 'Member';
  modalYear.textContent = member.year || 'N/A';
  modalMajor.textContent = member.major || 'N/A';
  modalEmail.textContent = member.email || 'N/A';
  modalBioText.textContent = member.bio || 'No bio available.';
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close member modal
function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Setup modal event listeners
function setupModalListeners() {
  const modal = document.getElementById('member-modal');
  const closeBtn = document.querySelector('.modal-close');
  
  // Close on X button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMemberModal);
  }
  
  // Close when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeMemberModal();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeMemberModal();
    }
  });
}

// Smooth scroll for mission section
function animateMissionSection() {
  const missionElements = document.querySelectorAll('.page-title, .page-text, .page-divider');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  missionElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.7s ease-out ${index * 0.1}s, transform 0.7s ease-out ${index * 0.1}s`;
    observer.observe(element);
  });
}

// Fallback function when Firestore is unavailable
function addCommFallback() {
  var page = document.getElementById("js-council");
  page.innerHTML = `
    <div class="page-council">
      <p style="text-align: center; padding: 40px; color: #666;">
        Unable to load member data. Please try refreshing the page.
        <br><br>
        If the problem persists, please contact the webmaster.
      </p>
    </div>
  `;
}

window.onload = function () {
  initCommonNav();
  setupModalListeners();
  addComm();
  animateMissionSection();
};

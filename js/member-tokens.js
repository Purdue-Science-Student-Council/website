// Member Token System
// Each member has a unique token for accessing their profile update page
// Token format: random string that maps to member ID

// Generate a random token
function generateToken() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

// Member tokens mapping - token -> member data
// TODO: Generate tokens for all current members
const memberTokens = {
  // Example format:
  // "abc123xyz789": {
  //   id: "christine-farrell",
  //   name: "Christine Farrell",
  //   position: "President",
  //   major: "Cell, Molecular, & Devt Biology",
  //   year: "Senior",
  //   email: "cfarrell@purdue.edu",
  //   committee: "executive",
  //   photoPath: "images/xcom/christine-farrell.jpg"
  // }
  
  // Generate tokens for existing members
  "demo-token-christine": {
    id: "christine-farrell",
    name: "Christine Farrell",
    position: "President",
    major: "Cell, Molecular, & Devt Biology",
    year: "Senior",
    email: "cfarrell@purdue.edu",
    committee: "executive",
    photoPath: "images/xcom/christine-farrell.jpg"
  },
  "demo-token-mia": {
    id: "mia-martinez",
    name: "Mia Martinez",
    position: "Vice President",
    major: "Chemistry",
    year: "Senior",
    email: "mmartinez@purdue.edu",
    committee: "executive",
    photoPath: "images/xcom/mia-martinez.jpg"
  },
  "demo-token-anushka": {
    id: "anushka-shome",
    name: "Anushka Shome",
    position: "Webmaster",
    major: "Computer Science",
    year: "Senior",
    email: "ashome@purdue.edu",
    committee: "executive",
    photoPath: "images/xcom/anushka-shome.jpg"
  }
};

// GitHub repository configuration for photo uploads
const GITHUB_CONFIG = {
  owner: "Purdue-Science-Student-Council",
  repo: "website",
  branch: "feature/avi-pssc-website",
  // TODO: Add GitHub Personal Access Token (with repo write permissions)
  // Create at: https://github.com/settings/tokens
  token: "YOUR_GITHUB_TOKEN_HERE"
};

// Validate token and return member data
function getMemberByToken(token) {
  return memberTokens[token] || null;
}

// Generate a private link for a member
function generateMemberLink(token) {
  const baseURL = window.location.origin;
  return `${baseURL}/update-profile.html?token=${token}`;
}

// Export for use in other files
if (typeof window !== 'undefined') {
  window.memberTokens = memberTokens;
  window.GITHUB_CONFIG = GITHUB_CONFIG;
  window.getMemberByToken = getMemberByToken;
  window.generateMemberLink = generateMemberLink;
}

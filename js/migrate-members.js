// Member Data Migration Script
// This script imports existing council members from council.js into Firestore
// Run this ONCE after setting up Firebase

// Instructions:
// 1. Open this file in a browser console on a page with Firebase loaded
// 2. Or create a temporary HTML page that loads Firebase and this script
// 3. Run: migrateMembers()

async function migrateMembers() {
  if (!window.db) {
    console.error('Firebase not initialized. Make sure firebase-config.js is loaded.');
    return;
  }
  
  console.log('Starting member migration...');
  
  const db = window.db;
  const batch = db.batch();
  
  // Executive Committee Members
  const executiveMembers = [
    {
      id: "christine-farrell",
      name: "Christine Farrell",
      position: "President",
      major: "Cell, Molecular, & Devt Biology",
      year: "Senior",
      email: "cfarrell@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/christine-farrell.jpg",
      bio: ""
    },
    {
      id: "mia-martinez",
      name: "Mia Martinez",
      position: "Vice President",
      major: "Chemistry",
      year: "Senior",
      email: "mmartinez@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/mia-martinez.jpg",
      bio: ""
    },
    {
      id: "evangelina-kalathoti",
      name: "Evangelina Kalathoti",
      position: "Secretary",
      major: "Neurobiology & Physiology",
      year: "Junior",
      email: "ekalathoti@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/evangelina-kalathoti.jpg",
      bio: ""
    },
    {
      id: "keya-dutta",
      name: "Keya Dutta",
      position: "Treasurer",
      major: "Chemistry",
      year: "Junior",
      email: "kdutta@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/keya-dutta.jpg",
      bio: ""
    },
    {
      id: "sarah-cronin",
      name: "Sarah Cronin",
      position: "Public Relations Director",
      major: "Chemistry",
      year: "Senior",
      email: "scronin@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/sarah-cronin.jpg",
      bio: ""
    },
    {
      id: "jodie-yoshitomi",
      name: "Jodie Yoshitomi",
      position: "Internal Activities Director",
      major: "Biology",
      year: "Sophomore",
      email: "jyoshitomi@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/jodie-yoshitomi.jpg",
      bio: ""
    },
    {
      id: "anushka-shome",
      name: "Anushka Shome",
      position: "Webmaster",
      major: "Computer Science",
      year: "Senior",
      email: "ashome@purdue.edu",
      committee: "executive",
      photoPath: "images/xcom/anushka-shome.jpg",
      bio: ""
    }
  ];
  
  // Campus Outreach Committee Members
  const campusOutreachMembers = [
    {
      id: "brian-young",
      name: "Brian Young",
      position: "Committee Head",
      major: "Mathematics, Statistics",
      year: "Junior",
      email: "byoung@purdue.edu",
      committee: "campus-outreach",
      photoPath: "images/cam/brian-young.jpg",
      bio: ""
    },
    {
      id: "sara-dehaan",
      name: "Sara DeHaan",
      position: "Committee Head",
      major: "Environmental Geosciences",
      year: "Sophomore",
      email: "sdehaan@purdue.edu",
      committee: "campus-outreach",
      photoPath: "images/cam/sara-dehaan.jpg",
      bio: ""
    }
  ];
  
  // Combine all members
  const allMembers = [
    ...executiveMembers,
    ...campusOutreachMembers
    // TODO: Add other committee members from council.js
  ];
  
  // Add timestamp
  const timestamp = firebase.firestore.Timestamp.now();
  
  // Batch write to Firestore
  allMembers.forEach(member => {
    const memberRef = db.collection('members').doc(member.id);
    batch.set(memberRef, {
      ...member,
      createdAt: timestamp,
      lastUpdated: timestamp
    });
  });
  
  try {
    await batch.commit();
    console.log(`✅ Successfully migrated ${allMembers.length} members to Firestore!`);
    console.log('Members:', allMembers.map(m => m.name));
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

// Generate tokens for all members
function generateMemberTokens() {
  if (!window.db) {
    console.error('Firebase not initialized.');
    return;
  }
  
  console.log('Generating member tokens and private links...');
  
  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };
  
  window.db.collection('members').get().then(snapshot => {
    const tokens = {};
    
    snapshot.forEach(doc => {
      const member = doc.data();
      const token = generateToken();
      const link = `${window.location.origin}/update-profile.html?token=${token}`;
      
      tokens[token] = {
        id: member.id,
        name: member.name,
        email: member.email,
        link: link
      };
      
      console.log(`${member.name}: ${link}`);
    });
    
    console.log('\n📋 Copy this to member-tokens.js:');
    console.log(JSON.stringify(tokens, null, 2));
  });
}

// Export functions
if (typeof window !== 'undefined') {
  window.migrateMembers = migrateMembers;
  window.generateMemberTokens = generateMemberTokens;
}

console.log('Migration script loaded. Run migrateMembers() to import members to Firestore.');
console.log('Then run generateMemberTokens() to create private links for each member.');

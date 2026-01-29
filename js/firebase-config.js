// Firebase Configuration
// Initialize Firebase for the PSSC Website

const firebaseConfig = {
  apiKey: "AIzaSyA_bX29Oyk0X2v-06B7Dikuc-N6bXTwlgI",
  authDomain: "pssc-website-3b5d5.firebaseapp.com",
  projectId: "pssc-website-3b5d5",
  storageBucket: "pssc-website-3b5d5.firebasestorage.app",
  messagingSenderId: "232511641700",
  appId: "1:232511641700:web:c7ee4931a3c83921e12771"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  
  // Initialize services
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  // Export for use in other files
  window.db = db;
  window.storage = storage;
  
  console.log('Firebase initialized successfully');
} else {
  console.error('Firebase SDK not loaded. Make sure to include Firebase scripts in your HTML.');
}

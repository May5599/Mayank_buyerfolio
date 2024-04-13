//properties listing

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut ,
   } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: "property-ceef3",
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  
  apiKey: "AIzaSyAZcfprk0TKcXsVoICJuM293kbPMS95Awk",
  authDomain: "buyerfolio-92ec5.firebaseapp.com",
  projectId: "buyerfolio-92ec5",
  storageBucket: "buyerfolio-92ec5.appspot.com",
  messagingSenderId: "160481052714",
  appId: "1:160481052714:web:d8c170cd6d673f0ecb1b53",
  measurementId: "G-ZX1EGWCJ8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {
db,
auth,
createUserWithEmailAndPassword,
updateProfile,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
}

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwv4IOLgo2nEJId5WkFqKNVJczkjqbYpM",
  authDomain: "create-visit-card.firebaseapp.com",
  databaseURL: "https://create-visit-card-default-rtdb.firebaseio.com",
  projectId: "create-visit-card",
  storageBucket: "create-visit-card.firebasestorage.app",
  messagingSenderId: "813051412237",
  appId: "1:813051412237:web:f9d37430d522605e7cba44",
  measurementId: "G-2FRQ1FEKZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
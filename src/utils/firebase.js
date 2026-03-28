// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKQb6kIhWuPW30p6_2P-4JhtDgq2cjUy0",
  authDomain: "netflix-gpt-4c001.firebaseapp.com",
  projectId: "netflix-gpt-4c001",
  storageBucket: "netflix-gpt-4c001.firebasestorage.app",
  messagingSenderId: "1037036717700",
  appId: "1:1037036717700:web:f3469bcdf002b6055da4d1",
  measurementId: "G-S9QQDL8W2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
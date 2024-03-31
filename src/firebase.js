// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vblog-a6364.firebaseapp.com",
  projectId: "vblog-a6364",
  storageBucket: "vblog-a6364.appspot.com",
  messagingSenderId: "981249054644",
  appId: "1:981249054644:web:f20e286ed5d6edf19304e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

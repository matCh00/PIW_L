// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOftQOC4X1ireq0zyVhagf6zzkzwy7iQ",
  authDomain: "piwo-64492.firebaseapp.com",
  projectId: "piwo-64492",
  storageBucket: "piwo-64492.appspot.com",
  messagingSenderId: "929433721620",
  appId: "1:929433721620:web:b4cb9bef08d9a7494b4001",
  measurementId: "G-9JJNVH5NE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
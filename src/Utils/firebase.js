// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-fac88.firebaseapp.com",
  projectId: "blog-fac88",
  storageBucket: "blog-fac88.appspot.com",
  messagingSenderId: "281079363480",
  appId: "1:281079363480:web:334ddd3b18b4315bb0dded",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

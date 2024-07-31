// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7fdb2.firebaseapp.com",
  projectId: "mern-blog-7fdb2",
  storageBucket: "mern-blog-7fdb2.appspot.com",
  messagingSenderId: "193295793426",
  appId: "1:193295793426:web:0dd4d4439c158ab54707cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
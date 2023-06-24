// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Vnn80JZ4hvzSE3afLe7JX56KDqeJJ2k",
  authDomain: "music-65e56.firebaseapp.com",
  projectId: "music-65e56",
  storageBucket: "music-65e56.appspot.com",
  messagingSenderId: "691017517741",
  appId: "1:691017517741:web:242b2616babe1a00d2d424",
  measurementId: "G-RKJYYB51CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
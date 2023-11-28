// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIVjUdtYUvW7-noM1sXNs63CcGHtPgIyE",
  authDomain: "inventoryautoparts2023.firebaseapp.com",
  databaseURL: "https://inventoryautoparts2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inventoryautoparts2023",
  storageBucket: "inventoryautoparts2023.appspot.com",
  messagingSenderId: "908806748326",
  appId: "1:908806748326:web:d8929d5d469ef5ffca5c67",
  measurementId: "G-7YJ2NK2FP4"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const db = getFirestore(app);
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();



export default db;
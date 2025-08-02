// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZNbGFMJMtVMt2sRaLR_C5_wqRDHaIiFs",
  authDomain: "rescueroam-dbc1a.firebaseapp.com",
  projectId: "rescueroam-dbc1a",
  storageBucket: "rescueroam-dbc1a.firebasestorage.app",
  messagingSenderId: "717889592198",
  appId: "1:717889592198:web:a842fae1f0a6574375ea07",
  measurementId: "G-2M5M0WD1SD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
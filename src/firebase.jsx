// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚡ Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDh_MUcmXUOFASjIIizi91N1DVsj_UAEMY",
  authDomain: "fir-ed287.firebaseapp.com",
  projectId: "fir-ed287",
  storageBucket: "fir-ed287.firebasestorage.app",
  messagingSenderId: "300236930153",
  appId: "1:300236930153:web:28b061034a2e0d147376f8",
  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxEltTLIX2kn_nntsuQ5k4zuzoQ8VtRTs",
  authDomain: "piwo-10c16.firebaseapp.com",
  projectId: "piwo-10c16",
  storageBucket: "piwo-10c16.appspot.com",
  messagingSenderId: "369171401722",
  appId: "1:369171401722:web:5be627f74c3cf61fb63243",
  measurementId: "G-7PQ0V4E0TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
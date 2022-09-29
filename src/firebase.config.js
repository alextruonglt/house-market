import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD56mVSXQdA_bCi8VdmO-bSbuRxZ4SlPzw",
  authDomain: "house-market-d9597.firebaseapp.com",
  projectId: "house-market-d9597",
  storageBucket: "house-market-d9597.appspot.com",
  messagingSenderId: "900633003413",
  appId: "1:900633003413:web:835f8ace3fe4149ae7229c",
  measurementId: "G-L8Z641FP8X"
};

// Initialize Firebase
export const db = getFirestore()
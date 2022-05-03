import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcyIvb8GMWePTp7vRM5L33PQ2K40BAPLI",
  authDomain: "assistenciadomiciliar-841d3.firebaseapp.com",
  projectId: "assistenciadomiciliar-841d3",
  storageBucket: "assistenciadomiciliar-841d3.appspot.com",
  messagingSenderId: "57176544346",
  appId: "1:57176544346:web:65fb2db605f719f7ac7463",
  measurementId: "G-G47CNMNJ0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

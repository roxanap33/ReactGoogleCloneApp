import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY6gLM3ZfIy_E8dyGOni0GHQt0Dlay_FA",
  authDomain: "react-clone-app-e94de-32603.firebaseapp.com",
  projectId: "react-clone-app-e94de",
  storageBucket: "react-clone-app-e94de.appspot.com",
  messagingSenderId: "14017901318",
  appId: "1:14017901318:web:5b051f0ad285e87cf1a487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

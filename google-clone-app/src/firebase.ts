import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY6gLM3ZfIy_E8dyGOni0GHQt0Dlay_FA",
  authDomain: "react-clone-app-e94de-32603.firebaseapp.com",
  projectId: "react-clone-app-e94de",
  storageBucket: "react-clone-app-e94de.appspot.com",
  messagingSenderId: "14017901318",
  appId: "1:14017901318:web:5b051f0ad285e87cf1a487",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const name: any = result.user.displayName;
      const email: any = result.user.email;
      const profilePicture: any = result.user.photoURL;
      //console.log(result);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePicture", profilePicture);
    })
    .catch((error) => {
      console.log(error);
    });
};

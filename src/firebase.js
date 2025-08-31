 import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2EbO7RIQMSGSWvohhn2MeobVQ8nrZjk8",
  authDomain: "login-withfire.firebaseapp.com",
  projectId: "login-withfire",
  storageBucket: "login-withfire.firebasestorage.app",
  messagingSenderId: "638626504259",
  appId: "1:638626504259:web:83993e83683a0084513ef6",
  measurementId: "G-D150TXW4ZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, loginWithGoogle, logout };

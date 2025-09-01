import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

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

// Configure providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup'
});
  display: 'popup'
});

const twitterProvider = new TwitterAuthProvider();
twitterProvider.setCustomParameters({
  lang: 'en'
});
twitterProvider.setCustomParameters({
  lang: 'en'
});

// Authentication functions
const loginWithGoogle = async (useRedirect = false) => {
  try {
    let result;
    if (useRedirect) {
      await signInWithRedirect(auth, googleProvider);
      return null; // Redirect will handle the rest
    } else {
      result = await signInWithPopup(auth, googleProvider);
    }
    return result.user;
  } catch (error) {
    if (error.code === 'auth/popup-blocked') {
      // Fallback to redirect if popup is blocked
      console.log('Popup blocked, trying redirect...');
      await signInWithRedirect(auth, googleProvider);
      return null;
    } else {
      console.error('Google login error:', error);
      throw error;
    }
    let result;
    if (useRedirect) {
      await signInWithRedirect(auth, googleProvider);
      return null; // Redirect will handle the rest
    } else {
      result = await signInWithPopup(auth, googleProvider);
    }
};

    if (error.code === 'auth/popup-blocked') {
      // Fallback to redirect if popup is blocked
      console.log('Popup blocked, trying redirect...');
      await signInWithRedirect(auth, googleProvider);
      return null;
    } else {
      console.error('Google login error:', error);
      throw error;
    }
    let result;
    if (useRedirect) {
      await signInWithRedirect(auth, facebookProvider);
const loginWithFacebook = async (useRedirect = false) => {
    } else {
    let result;
    if (useRedirect) {
      await signInWithRedirect(auth, facebookProvider);
      return null;
    } else {
      result = await signInWithPopup(auth, facebookProvider);
    }
    }
    return result.user;
    if (error.code === 'auth/popup-blocked') {
      console.log('Popup blocked, trying redirect...');
      await signInWithRedirect(auth, facebookProvider);
      return null;
    } else {
      console.error('Facebook login error:', error);
      throw error;
    }
  }
};

const loginWithTwitter = async (useRedirect = false) => {
  try {
    let result;
    if (useRedirect) {
      await signInWithRedirect(auth, twitterProvider);
      return null;
    } else {
      result = await signInWithPopup(auth, twitterProvider);
    }
    return result.user;
  } catch (error) {
    if (error.code === 'auth/popup-blocked') {
      console.log('Popup blocked, trying redirect...');
      await signInWithRedirect(auth, twitterProvider);
      return null;
    } else {
      console.error('Twitter login error:', error);
      throw error;
    }
  }
};

const signUpWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Email signup error:', error);
    throw error;
  }
};

const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Email signin error:', error);
    throw error;
  }
};

// Handle redirect result
const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    return result;
  } catch (error) {
    console.error('Redirect result error:', error);
    throw error;
  }
};

const logout = () => signOut(auth);

export { 
  auth, 
  loginWithGoogle, 
  loginWithFacebook,
  loginWithTwitter,
  signUpWithEmail,
  signInWithEmail,
  handleRedirectResult,
  logout 
};
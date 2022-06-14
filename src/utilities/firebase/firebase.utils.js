// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword 
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHThPCnl4IQh_q3jOItroWdzIqntNlxgQ",
  authDomain: "crwn-shop-db-563be.firebaseapp.com",
  projectId: "crwn-shop-db-563be",
  storageBucket: "crwn-shop-db-563be.appspot.com",
  messagingSenderId: "463121826325",
  appId: "1:463121826325:web:2f10fb0debdd26ae04041c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});
// auth is singleton
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // if user data does not exist
  if(!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const data = { displayName, email, createdAt, ...additionalInformation }
      await setDoc(userDocRef, data);
    } catch (error) {
      console.log('error on creating the user. ', error.message);
    }
  }
  return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async(emailId, password) => {
  if(!emailId || !password) { 
  return;
}
  return await createUserWithEmailAndPassword(auth, emailId, password);
}
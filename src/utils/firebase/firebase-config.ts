// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7caJ5fbicqZVNnGDPbaaKXRELpLLAWEw',
  authDomain: 'chill-app-a3060.firebaseapp.com',
  databaseURL:
    'https://chill-app-a3060-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chill-app-a3060',
  storageBucket: 'chill-app-a3060.appspot.com',
  messagingSenderId: '211229700961',
  appId: '1:211229700961:web:c990db3ee1fde7f716cb20',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signInWithCreds = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUpWithCreds = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signOutUser = () => signOut(auth);

export default app;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_UDKkdLVTsHU_0tZcTwIKKI03Qwiqh2E",
  authDomain: "expense-tracker-910c1.firebaseapp.com",
  projectId: "expense-tracker-910c1",
  storageBucket: "expense-tracker-910c1.firebasestorage.app",
  messagingSenderId: "628521530553",
  appId: "1:628521530553:web:a6e1e646eee14c126f5768",
  measurementId: "G-18P3YHEJQ9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const db = getFirestore(app)
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdNc3S8oyLpnjdzmciQHRmaOPTk9ichWY",
  authDomain: "kawayankulama-a24ef.firebaseapp.com",
  projectId: "kawayankulama-a24ef",
  storageBucket: "kawayankulama-a24ef.appspot.com",
  messagingSenderId: "90143938980",
  appId: "1:90143938980:web:ce48a17fa7fc73317bc931"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
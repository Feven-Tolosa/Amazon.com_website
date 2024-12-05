import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3zhDayRqyxK--P7Va6l-ED8FBtK1Qoq8",
  authDomain: "fir-962ee.firebaseapp.com",
  projectId: "fir-962ee",
  storageBucket: "fir-962ee.firebasestorage.app",
  messagingSenderId: "661438158039",
  appId: "1:661438158039:web:5dc68a6c2d27dbfafb8c92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

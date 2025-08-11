// firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABfIi7UQ_ROWBKO2up2BsvyAxhcuUbCoE",
  authDomain: "safespacewebproject.firebaseapp.com",
  projectId: "safespacewebproject",
  storageBucket: "safespacewebproject.firebasestorage.app",
  messagingSenderId: "817886586595",
  appId: "1:817886586595:web:3f1fc80d3fcce0bfffc7d6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

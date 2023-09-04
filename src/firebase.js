import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// import { get } from "firebase/firebase-storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBl2fDLM2xea3rQOmLDv5p1TrLxU5L_-FY",
  authDomain: "chatapp-3cefc.firebaseapp.com",
  projectId: "chatapp-3cefc",
  storageBucket: "chatapp-3cefc.appspot.com",
  messagingSenderId: "145735866772",
  appId: "1:145735866772:web:6892975c9f814944b1d781",
  measurementId: "G-CC3HTZ23LL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
// export const db = getFirestore();
const analytics = getAnalytics(app);

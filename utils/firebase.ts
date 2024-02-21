import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCmwFHkoJZ78vJOpVT3eNb9LmbzG4-dXBo",
  authDomain: "purease7.firebaseapp.com",
  projectId: "purease7",
  storageBucket: "purease7.appspot.com",
  messagingSenderId: "661140300582",
  appId: "1:661140300582:web:89c2ea2075a13df0db97e7",
  measurementId: "G-ESXHX37PG7",
} as const;

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth ,db ,functions} ;

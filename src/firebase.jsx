import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsBZUmsmUJjxad5EuQCOEaZmIT3MQ6wyc",
  authDomain: "vybz-6ad84.firebaseapp.com",
  projectId: "vybz-6ad84",
  storageBucket: "vybz-6ad84.appspot.com",
  messagingSenderId: "542108776991",
  appId: "1:542108776991:web:dd90cc8887c637addf732a",
  measurementId: "G-QEV7B8S4P7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
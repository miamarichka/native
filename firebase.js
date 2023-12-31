import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
console.log(import.meta.REACT_API_KEY,'process.env.REACT_API_KEY--------------------------------------------------------------------------------------------');

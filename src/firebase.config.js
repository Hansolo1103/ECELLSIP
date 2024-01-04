// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaVClqDRg1FpPIBD00MHwaI70lr8UwTBI",
  authDomain: "ecell-sip-portal.firebaseapp.com",
  projectId: "ecell-sip-portal",
  storageBucket: "ecell-sip-portal.appspot.com",
  messagingSenderId: "648033541218",
  appId: "1:648033541218:web:9a2926d560c831ceb7453b",
  measurementId: "G-RSNGZ8EEMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {analytics};
export {db};
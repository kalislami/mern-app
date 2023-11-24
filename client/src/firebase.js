// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT,
  storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_FIREBASE_APP,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT
};

// Initialize Firebase
// export 
export const app = initializeApp(firebaseConfig);

//login firebase anonymously for upload file
// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     console.log('login firebase');
//   })
//   .catch((error) => {
//     console.log('error login firebase:');
//     console.log(error);
//   });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8z2QVjP33qgjVUbFLznLFcQ3LxZuSNbM",
  authDomain: "doc-hours.firebaseapp.com",
  projectId: "doc-hours",
  storageBucket: "doc-hours.appspot.com",
  messagingSenderId: "171076359088",
  appId: "1:171076359088:web:83474b4c7a1dc994c33c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  apiKey: "AIzaSyDFrHtPYKg0r1ylEy622gnGfBe_eC92_vU",
  authDomain: "doctors-portal-bee2e.firebaseapp.com",
  projectId: "doctors-portal-bee2e",
  storageBucket: "doctors-portal-bee2e.appspot.com",
  messagingSenderId: "583702692257",
  appId: "1:583702692257:web:baa1159e8d54ba7ce24be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNTpkkffPNeU_K0Ua716PgwHx4lqEZbo",
  authDomain: "react-dragor-news.firebaseapp.com",
  projectId: "react-dragor-news",
  storageBucket: "react-dragor-news.appspot.com",
  messagingSenderId: "482939060005",
  appId: "1:482939060005:web:b73242a545566aea3a24cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
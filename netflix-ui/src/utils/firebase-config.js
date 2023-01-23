// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA30iRbB7PJ3k7zlMFbyVpwvln_3rUcEPk",
  authDomain: "react-netflix-clone-218e2.firebaseapp.com",
  projectId: "react-netflix-clone-218e2",
  storageBucket: "react-netflix-clone-218e2.appspot.com",
  messagingSenderId: "551214166886",
  appId: "1:551214166886:web:4231b9244694c5abc9cea7",
  measurementId: "G-B9B8706R71"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

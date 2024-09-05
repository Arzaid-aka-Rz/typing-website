import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo9kpaMuq9GYz6gS-_FN9tD2Ddh1qljYM",
  authDomain: "typing-website-a7a91.firebaseapp.com",
  projectId: "typing-website-a7a91",
  storageBucket: "typing-website-a7a91.appspot.com",
  messagingSenderId: "696541468842",
  appId: "1:696541468842:web:b433e08c535ef6077498d3",
  measurementId: "G-QF6MSM4VGG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export {auth,db}; 
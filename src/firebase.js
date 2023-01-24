import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// import * as firebase from "firebase/app";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiYZ7BwQ1bLQQFv4FH1P1zWlflXXYittM",
  authDomain: "linkedin-clone-15258.firebaseapp.com",
  projectId: "linkedin-clone-15258",
  storageBucket: "linkedin-clone-15258.appspot.com",
  messagingSenderId: "659493901304",
  appId: "1:659493901304:web:c3eb4a892bb7781454fc0d",
  measurementId: "G-Z1T3S5B544"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage()

//const analytics = getAnalytics(app);

export {auth, provider, storage};
export default db;
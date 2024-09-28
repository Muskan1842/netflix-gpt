// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP0gV9xU2OWsih6htDRwYkTIulfZSMkiI",
    authDomain: "super-netflix-gpt.firebaseapp.com",
    projectId: "super-netflix-gpt",
    storageBucket: "super-netflix-gpt.appspot.com",
    messagingSenderId: "941524104592",
    appId: "1:941524104592:web:169973fc911a052c7e6f15",
    measurementId: "G-8GXS4MYPNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
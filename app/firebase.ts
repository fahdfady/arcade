// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDl2YVbkfZySFB-99lGCorMPbElqqz-0E8",
    authDomain: "arcade-79fcf.firebaseapp.com",
    projectId: "arcade-79fcf",
    storageBucket: "arcade-79fcf.appspot.com",
    messagingSenderId: "925641551604",
    appId: "1:925641551604:web:f79cc7efab312791ec78a1",
    measurementId: "G-Y5RR6GZQQV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);

export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4Rur0y9er6KgqjlpZtPcqeazxs0Wwsyk",
    authDomain: "blog-project-9540c.firebaseapp.com",
    projectId: "blog-project-9540c",
    storageBucket: "blog-project-9540c.appspot.com",
    messagingSenderId: "479953246768",
    appId: "1:479953246768:web:b56dca48ec256cbcad2bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
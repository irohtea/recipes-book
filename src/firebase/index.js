// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getFirestore } from "firebase/app"
const firebaseConfig = {
   apiKey: "AIzaSyBDlHMLcOAWIL4N7Kzv0ORGcx_D3jCM8tY",
   authDomain: "recipe-app-2d368.firebaseapp.com",
   projectId: "recipe-app-2d368",
   storageBucket: "recipe-app-2d368.appspot.com",
   messagingSenderId: "504979948351",
   appId: "1:504979948351:web:a3e957f33bb9d106f5498a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { auth, db }
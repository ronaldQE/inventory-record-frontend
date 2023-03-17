// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIooLfFhGCJ9s7-9POphPuZhbNDOMHsJY",
  authDomain: "db-employee-vaccination.firebaseapp.com",
  projectId: "db-employee-vaccination",
  storageBucket: "db-employee-vaccination.appspot.com",
  messagingSenderId: "135852661669",
  appId: "1:135852661669:web:8dd23e0443c2ef491be64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
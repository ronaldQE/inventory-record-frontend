// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGs9L8vRCJTyUNalhpfpuI1wZsV0I5BNs",
  authDomain: "db-prueba-83cb0.firebaseapp.com",
  projectId: "db-prueba-83cb0",
  storageBucket: "db-prueba-83cb0.appspot.com",
  messagingSenderId: "1048473587548",
  appId: "1:1048473587548:web:6d865e37e229c7f327bb99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
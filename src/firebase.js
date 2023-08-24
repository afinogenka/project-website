// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm5MtKAOD4Wscosu9Lq_WKd3tPqHiw2Ug",
  authDomain: "website-d5e08.firebaseapp.com",
  projectId: "website-d5e08",
  storageBucket: "website-d5e08.appspot.com",
  messagingSenderId: "876798157716",
  appId: "1:876798157716:web:55fde5e97db2866096a581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOJHLgdD6MyIb9lNeQupmf19djuW_kVvo",
  authDomain: "book-warehouse-701da.firebaseapp.com",
  projectId: "book-warehouse-701da",
  storageBucket: "book-warehouse-701da.appspot.com",
  messagingSenderId: "649647821385",
  appId: "1:649647821385:web:2135bc53c05e7dc98be598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
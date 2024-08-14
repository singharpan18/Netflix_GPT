// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIzZNixC0Yxw7KJP51WyWIhcotVD9LyTs",
  authDomain: "netflixgpt-70416.firebaseapp.com",
  projectId: "netflixgpt-70416",
  storageBucket: "netflixgpt-70416.appspot.com",
  messagingSenderId: "66483559330",
  appId: "1:66483559330:web:ee8e9deeb387ab789070fb",
  measurementId: "G-R1MW52SZ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
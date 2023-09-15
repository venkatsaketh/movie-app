// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4fM9Aq_3e96WYeJGtW1QO07sgfi-ndbo",
  authDomain: "movie-app-saketh.firebaseapp.com",
  projectId: "movie-app-saketh",
  storageBucket: "movie-app-saketh.appspot.com",
  messagingSenderId: "992275539415",
  appId: "1:992275539415:web:5af1ce95f6e849afd39792",
  measurementId: "G-LSR48TE0J5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

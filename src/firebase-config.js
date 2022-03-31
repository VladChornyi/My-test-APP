import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL6l5sj3FnrS2SRi1yfGt36MozBBhvdB0",
  authDomain: "find-good-developer.firebaseapp.com",
  projectId: "find-good-developer",
  storageBucket: "find-good-developer.appspot.com",
  messagingSenderId: "144164901683",
  appId: "1:144164901683:web:4b1a6043a230f52b7ae446",
  measurementId: "G-WRPQVVFW0M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

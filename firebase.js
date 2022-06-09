import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDrHlxTMFpSJpK9wOwc00-0FgNmQWU4uFI",
  authDomain: "drp22-c4cf7.firebaseapp.com",
  databaseURL: "https://drp22-c4cf7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "drp22-c4cf7",
  storageBucket: "drp22-c4cf7.appspot.com",
  messagingSenderId: "641039613250",
  appId: "1:641039613250:web:120f3ee1b49e0c4727dcdb",
  measurementId: "G-RCTVFJVMC5"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
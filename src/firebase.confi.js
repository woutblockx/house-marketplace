// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-MjpR_wIhkmghbmS1s4hGnWwTdx--fI0",
  authDomain: "house-marketplace-app-3f32d.firebaseapp.com",
  projectId: "house-marketplace-app-3f32d",
  storageBucket: "house-marketplace-app-3f32d.appspot.com",
  messagingSenderId: "943110291383",
  appId: "1:943110291383:web:54b25668872ff6bd12b232"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA-lRnTLewii9pVow42I6vQIWIfbc0uwA",
  authDomain: "miniblog-c6af9.firebaseapp.com",
  projectId: "miniblog-c6af9",
  storageBucket: "miniblog-c6af9.appspot.com",
  messagingSenderId: "951469618329",
  appId: "1:951469618329:web:796398265b4599112ab408"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
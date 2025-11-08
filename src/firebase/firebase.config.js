import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAua6RU1WE4s82XuenIq3J-cxfTsmnKUQs",
  authDomain: "three-d-model-hub.firebaseapp.com",
  projectId: "three-d-model-hub",
  storageBucket: "three-d-model-hub.firebasestorage.app",
  messagingSenderId: "496729022402",
  appId: "1:496729022402:web:840a5678d0e93f9876005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

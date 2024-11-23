import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain: "covid---dashboard.firebaseapp.com",
  projectId: "covid---dashboard",
  storageBucket: "covid---dashboard.firebasestorage.app",
  messagingSenderId: "815739517154",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-RNW3Y8P2M5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
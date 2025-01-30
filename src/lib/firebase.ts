import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhxKWANak5JQRdBo5g55Z-rvnfSsLLMdo",
  authDomain: "iitb-cad71.firebaseapp.com",
  databaseURL: "https://iitb-cad71-default-rtdb.firebaseio.com",
  projectId: "iitb-cad71",
  storageBucket: "iitb-cad71.firebasestorage.app",
  messagingSenderId: "917206215926",
  appId: "1:917206215926:web:665ea89353cd14d12490d7",
  measurementId: "G-J50ED97QHS"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
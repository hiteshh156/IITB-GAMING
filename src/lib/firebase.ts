import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXVx9Z7PXHcF9X9Z9X9Z9X9Z9X9Z9X9Z9",
  authDomain: "iitb-cad71.firebaseapp.com",
  projectId: "iitb-cad71",
  storageBucket: "iitb-cad71.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:917206215926:web:665ea89353cd14d12490d7",
  databaseURL: "https://iitb-cad71-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
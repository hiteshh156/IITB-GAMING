import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXVx9Z7PXHcF9X9Z9X9Z9X9Z9X9Z9X9Z9",
  authDomain: "gamehub-community.firebaseapp.com",
  projectId: "gamehub-community",
  storageBucket: "gamehub-community.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123456789",
  databaseURL: "https://gamehub-community-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYYSw4RgaIgqvpPY5EyHys0pBvOXZuWL8",
  authDomain: "mentia-552ac.firebaseapp.com",
  databaseURL: "https://mentia-552ac-default-rtdb.firebaseio.com",
  projectId: "mentia-552ac",
  storageBucket: "mentia-552ac.firebasestorage.app",
  messagingSenderId: "1024804759333",
  appId: "1:1024804759333:web:77d379b1792af3624f1ccc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

console.log("🔥 Firebase inicializado com sucesso!");

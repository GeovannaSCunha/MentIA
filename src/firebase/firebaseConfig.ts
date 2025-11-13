import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  databaseURL: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

console.log("🔥 Firebase inicializado com sucesso!");

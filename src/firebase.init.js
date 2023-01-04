import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDxnJ_kZ3fRQ7FEVxjqzwiOqSUkv0Kz8R4",
  authDomain: "foodcorner-9b9a2.firebaseapp.com",
  projectId: "foodcorner-9b9a2",
  storageBucket: "foodcorner-9b9a2.appspot.com",
  messagingSenderId: "634617658038",
  appId: "1:634617658038:web:4ade6beea8d6dc5fea8417"
};
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;
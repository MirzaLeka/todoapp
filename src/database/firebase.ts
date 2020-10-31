import firebase from 'firebase/app';
import 'firebase/firestore';
import 'dotenv/config';

const firebaseConfig = {
  apiKey: "AIzaSyAFLxxHpVrMP9t3kaP2HF-ZQ8nNBmisyoE",
  authDomain: "whitelionix-todo-app.firebaseapp.com",
  databaseURL: "https://whitelionix-todo-app.firebaseio.com",
  projectId: "whitelionix-todo-app",
  storageBucket: "whitelionix-todo-app.appspot.com",
  messagingSenderId: "861843093563",
  appId: "1:861843093563:web:8384b18825a571c643041e"
}

firebase.initializeApp(firebaseConfig);

export default firebase;

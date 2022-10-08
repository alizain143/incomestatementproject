import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDQYsMXEbyNw_V_C2yC9zR6dBIhvL7UslQ",
    authDomain: "incomestatement-6b005.firebaseapp.com",
    projectId: "incomestatement-6b005",
    storageBucket: "incomestatement-6b005.appspot.com",
    messagingSenderId: "229420552858",
    appId: "1:229420552858:web:cbf3763c4e39e68f310523"
  };

  const app = initializeApp(firebaseConfig);
 
  export const auth = getAuth(app)
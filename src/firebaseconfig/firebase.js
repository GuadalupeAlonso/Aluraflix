import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYxYTJyCdMhlIobMCXprr_6Vd25-bg45Q",
  authDomain: "videonline-firebase.firebaseapp.com",
  projectId: "videonline-firebase",
  storageBucket: "videonline-firebase.appspot.com",
  messagingSenderId: "676002830897",
  appId: "1:676002830897:web:9e6a6035e45a2e36dd9310",
  measurementId: "G-7FNNVJF2V3"
};


const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
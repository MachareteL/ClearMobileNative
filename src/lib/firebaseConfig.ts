import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_LEEnzoNq1YWzkzX25W2YJkGFnBRmayk",
  authDomain: "appmobileclear.firebaseapp.com",
  projectId: "appmobileclear",
  storageBucket: "appmobileclear.appspot.com",
  messagingSenderId: "927279537968",
  appId: "1:927279537968:web:e5f1585de51f41910132f5",
  measurementId: "G-T0F66NX4C2",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
const db = getFirestore(app)
const storage = getStorage(app)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { app, auth, db, storage };

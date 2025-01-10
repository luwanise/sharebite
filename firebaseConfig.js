import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCmWH8Aqrl5ibxJb_aP61gKtUBSdbj-X0",
    authDomain: "sharebite-app.firebaseapp.com",
    projectId: "sharebite-app",
    storageBucket: "sharebite-app.firebasestorage.app",
    messagingSenderId: "356226633217",
    appId: "1:356226633217:web:eb4b7ee17241c85b347a00",
    measurementId: "G-J1LZN5DHNC"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

export {app, auth, db};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
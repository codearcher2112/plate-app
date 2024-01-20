// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq3-FQbTmU4FKtELXbS5pnupEBXmFH_JY",
    authDomain: "plate-app-b93e5.firebaseapp.com",
    projectId: "plate-app-b93e5",
    storageBucket: "plate-app-b93e5.appspot.com",
    messagingSenderId: "644983941077",
    appId: "1:644983941077:web:fbac8385ccd0c68876bf5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

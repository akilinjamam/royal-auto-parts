// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ7Eav71CrOclm_Hc92GACfGCcGs8KkNQ",
    authDomain: "the-royal-autoparts.firebaseapp.com",
    projectId: "the-royal-autoparts",
    storageBucket: "the-royal-autoparts.appspot.com",
    messagingSenderId: "411847381489",
    appId: "1:411847381489:web:860614612d3b81d1283450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
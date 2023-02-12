// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2bs_JkItkrYYk322DRdjAzBvoVVQRWeE",
    authDomain: "bananeapp-8b8f1.firebaseapp.com",
    projectId: "bananeapp-8b8f1",
    storageBucket: "bananeapp-8b8f1.appspot.com",
    messagingSenderId: "192902084275",
    appId: "1:192902084275:web:cab0447f0f5d8a095fe2c6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth }
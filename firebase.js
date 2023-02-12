import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD2bs_JkItkrYYk322DRdjAzBvoVVQRWeE",
    authDomain: "bananeapp-8b8f1.firebaseapp.com",
    projectId: "bananeapp-8b8f1",
    storageBucket: "bananeapp-8b8f1.appspot.com",
    messagingSenderId: "192902084275",
    appId: "1:192902084275:web:cab0447f0f5d8a095fe2c6"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (usermail, password) => {
    const { user } = await createUserWithEmailAndPassword(auth, usermail, password)
    return user
}


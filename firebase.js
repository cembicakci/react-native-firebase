import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Alert } from "react-native";

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
    try {
        const { user } = await createUserWithEmailAndPassword(auth, usermail, password)
        return user
    } catch (error) {
        Alert.alert('Error:', error.message)
    }
}

export const login = async (usermail, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, usermail, password)
        Alert.alert('Hoşgeldiniz', user.email)
        return user

    } catch (error) {
        Alert.alert('Error:', error.message)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        return true

    } catch (error) {
        Alert.alert('Error:', error.message)
    }
}


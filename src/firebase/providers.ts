import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateCurrentUser, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { RegisterForm } from "../interfaces";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    return result;
}

export const registerUserWithEmailPassword = async (registro : RegisterForm) => {
    const { email, password } = registro;
    const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    if (userCredential) {
        await updateProfile(userCredential.user, { displayName: registro.displayName });
    }
    return userCredential;
}

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    return result;
}
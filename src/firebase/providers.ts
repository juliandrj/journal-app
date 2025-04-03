import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { User } from "../interfaces";

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () : Promise<User> => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        return {
            uid: result.user.uid,
            email: result.user.email || '',
            displayName: result.user.displayName || '',
            photoURL: result.user.photoURL || ''
        };
    } catch (error) {
        throw new Error("Error signing in with Google: " + error);
    }
}
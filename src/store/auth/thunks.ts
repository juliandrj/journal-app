import { signInWithGoogle } from "../../firebase/providers";
import { LoginForm, User } from "../../interfaces";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (loginForm:LoginForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

export const starGoogleSingIn = () => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithGoogle();
            if (result && result.user) {
                const user: User = {
                    uid: result.user.uid,
                    displayName: result.user.displayName || "",
                    email: result.user.email || "",
                    photoURL: result.user.photoURL || "",
                }
                dispatch(login(user));
            } else {
                dispatch(logout("No user found"));
            }
        } catch (e) {
            if (e instanceof Error) {
                dispatch(logout(e.message));
            } else {
                dispatch(logout(e));
            }
        }
    }
}

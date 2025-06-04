import { UserCredential } from "firebase/auth";
import { signInWithGoogle, registerUserWithEmailPassword, signInWithEmailPassword, logoutFirebase } from '../../firebase/providers';
import { LoginForm, RegisterForm, User } from "../../interfaces";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";
import { clearJournalState } from "../journal";

const generarUser = (result: UserCredential): User | undefined => {
    if (result && result.user) {
        return {
            uid: result.user.uid,
            displayName: result.user.displayName || "",
            email: result.user.email || "",
            photoURL: result.user.photoURL || "",
        }
    }
    return undefined;
}

export const startGoogleSingIn = () => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithGoogle();
            const user = generarUser(result);
            dispatch(login(user));
        } catch (e) {
            if (e instanceof Error) {
                dispatch(logout(e.message));
            } else {
                dispatch(logout(e));
            }
        }
    }
}

export const startWithEmailPassword = (registro: RegisterForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await registerUserWithEmailPassword(registro);
            const user = generarUser(result);
            dispatch(login(user));
        } catch (e) {
            if (e instanceof Error) {
                dispatch(logout(e.message));
            } else {
                dispatch(logout(e));
            }
        }
    }
}

export const startLoginWithEmailPassword = (loginForm: LoginForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithEmailPassword(loginForm);
            const user = generarUser(result);
            dispatch(login(user));
        } catch (e) {
            if (e instanceof Error) {
                dispatch(logout(e.message));
            } else {
                dispatch(logout(e));
            }
        }
    }
}

export const startLogout = () => {
    return async(dispatch:AppDispatch) => {
        await logoutFirebase();
        dispatch(clearJournalState());
        dispatch(logout("Sesión finalizada."));
    }
}

import { UserCredential } from "firebase/auth";
import { signInWithGoogle, registerUserWithEmailPassword, signInWithEmailPassword } from '../../firebase/providers';
import { LoginForm, RegisterForm, User } from "../../interfaces";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (loginForm:LoginForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

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

export const starGoogleSingIn = () => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithGoogle();
            const user = generarUser(result);
            if (user) {
                dispatch(login(user));
            } else {
                dispatch(logout("No se pudo obtener la información del usuario"));
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

export const starWithEmailPassword = (registro: RegisterForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await registerUserWithEmailPassword(registro);
            const user = generarUser(result);
            if (user) {
                dispatch(login(user));
            } else {
                dispatch(logout("No se pudo obtener la información del usuario"));
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

export const startLoginWithEmailPassword = (loginForm: LoginForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithEmailPassword(loginForm);
            const user = generarUser(result);
            if (user) {
                dispatch(login(user));
            } else {
                dispatch(logout("No se pudo obtener la información del usuario"));
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

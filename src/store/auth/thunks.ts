import { signInWithGoogle } from "../../firebase/providers";
import { Error, LoginForm } from "../../interfaces";
import { AppDispatch } from "../store";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (loginForm:LoginForm) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

export const starGoogleSingIn = () => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            const user = await signInWithGoogle();
            console.log({user});
        } catch (e) {
            const error : Error = {
                code: '1',
                message: e as string
            };
            console.log({error});
        }
    }
}

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { User } from "../interfaces";
import { RootState, useAppDispatch } from "../store";
import { startLoadingNotes } from "../store/journal";
import { useSelector } from "react-redux";

export const useCheckAuth = () => {
    const {status} = useSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) {
                return dispatch(logout(""));
            }
            const usuario : User = {
                uid: user.uid,
                email: user.email || "",
                displayName: user.displayName || "",
                photoURL: user.photoURL || ""
            };
            dispatch(login(usuario));
            dispatch(startLoadingNotes());
        });
    }, [])
    return status;
}

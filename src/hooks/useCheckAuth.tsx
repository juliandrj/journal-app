import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { User } from "../interfaces";
import { RootState } from "../store";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
    const {status} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

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

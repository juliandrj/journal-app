import { AuthState, User } from "../../src/interfaces";

export const initialAuthState: AuthState = {
    status: "checking"
};

export const demoUser: User = {
    uid: "abcdef",
    displayName: "Demo User",
    email: "demo@demo.org",
    photoURL: "https://demo.com/demo.jpg"
};

export const authenticatedState: AuthState = {
    status: "authenticated",
    user: demoUser
};

export const sesionFinalizadaMsg = "sesión finalizada";

export const unauthenticatedState: AuthState = {
    status: "not-authenticated",
    errorMessage: sesionFinalizadaMsg
};

import { AuthState, User } from "../../src/interfaces";
import { IdTokenResult, User as AuthUser, UserCredential } from 'firebase/auth';

export const userCredentialUser: AuthUser = {
    providerId: "google.com",
    displayName: "Julian Rojas",
    photoURL: "https://lh3.googleusercontent.com/a/ACg8ocLskXzht_Wr3fEx58WC9saV18OXDoP_DZ3ZUGs59UVsFIfDtDLf=s96-c",
    email: "juliandrj@gmail.com",
    uid: "106164484370350057641",
    emailVerified: true,
    isAnonymous: false,
    metadata: {},
    providerData: [],
    refreshToken: 'abcdef',
    tenantId: '',
    delete: () => new Promise<void>(() => {}),
    getIdToken: () => new Promise<string>(() => {}),
    getIdTokenResult: () => new Promise<IdTokenResult>(() => {}),
    reload: () => new Promise<void>(() => {}),
    toJSON: () => new Object(),
    phoneNumber: ''
};

export const userCredential: UserCredential = {
    operationType: 'signIn',
    providerId: 'google.com',
    user: userCredentialUser
};

export const errorLogin: Error = {
    name: 'Login fail',
    message: 'Login fail'
};

export const initialAuthState: AuthState = {
    status: "checking"
};

export const demoUser: User = {
    uid: userCredentialUser.uid,
    displayName: `${userCredentialUser.displayName}`,
    email: `${userCredentialUser.email}`,
    photoURL: `${userCredentialUser.photoURL}`
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

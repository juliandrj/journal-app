export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    uid?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    errorMessage?: string;
}
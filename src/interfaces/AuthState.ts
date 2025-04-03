import { User } from "./User";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user?: User;
}
import { LoginForm } from "./LoginForm";

export interface RegisterForm extends LoginForm {
    displayName: string;
    email: string;
    password2: string;
}

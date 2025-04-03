import { Google } from "@mui/icons-material"
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { LoginForm } from "../../interfaces"
import { useAppDispatch } from "../../store"
import { checkingAuthentication, starGoogleSingIn } from "../../store/auth"

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const { formState, onInputChange } = useForm<LoginForm>({
        user: "",
        password: ""
    });
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(checkingAuthentication(formState));
    }
    const onGoogleSignIn = () => {
        dispatch(starGoogleSingIn());
    }
    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} >
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="e-mail" type="email" placeholder="correo@mail.com" name="user" value={formState.user} onChange={onInputChange} />
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="contraseña" type="password" placeholder="contraseña" name="password" value={formState.password} onChange={onInputChange} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button fullWidth onClick={onGoogleSignIn} variant="contained" color="primary">
                            <Google />
                            <Typography sx={{ml: 1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"end"}>
                    <Link component={RouterLink} color="info" to="/auth/register">Registrarse</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}

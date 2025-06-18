import { Google } from "@mui/icons-material"
import { Alert, Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { LoginForm } from "../../interfaces"
import { useAppDispatch } from "../../store"
import { resetErrorMessage, startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth"
import { useSelector } from "react-redux"
import { RootState } from '../../store/store';
import { useMemo } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const {status, errorMessage} = useSelector((state:RootState) => state.auth);
    const isAuthenticating = useMemo(() => status === "checking", [status]);
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();
    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        dispatch(startLoginWithEmailPassword(data));
    }
    const onGoogleSignIn = () => {
        dispatch(startGoogleSingIn());
    }
    return (
        <AuthLayout title="Login">
            <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn animate__faster" data-testid="formElement" >
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Correo" type="text" placeholder="correo electrónico" error={errors.user !== undefined} helperText={errors.user && "Nombre de usuario requerido"} {...register("user", {required: true})} slotProps={{htmlInput: {"data-testid": "user-txt"}}} />
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="contraseña" type="password" placeholder="contraseña" error={errors.password !== undefined} helperText={errors.password && "Contraseña requerida"} {...register("password", {required: true})} slotProps={{htmlInput: {"data-testid": "password-txt"}}} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} display={!!errorMessage ? '' : 'none'}>
                    <Grid size={{xs: 12}} sx={{mt: 2}}>
                        <Alert severity="error" className="animate__animated animate__shakeX">{ errorMessage }</Alert>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button type="submit" fullWidth disabled={isAuthenticating} variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button fullWidth disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" color="primary" data-testid="google-btn" >
                            <Google />
                            <Typography sx={{ml: 1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"end"}>
                    <Link component={RouterLink} color="info" to="/auth/register" onClick={() => dispatch(resetErrorMessage())}>Registrarse</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}

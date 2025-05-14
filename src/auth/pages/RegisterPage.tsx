import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { RegisterForm } from "../../interfaces"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "../../store"
import { starWithEmailPassword } from "../../store/auth"

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const { register,
            handleSubmit,
            watch,
            formState: { errors },
    } = useForm<RegisterForm>();
    const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
        dispatch(starWithEmailPassword(data));
    }
    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Nombre completo" type="text" placeholder="nombre completo" error={errors.displayName !== undefined} helperText={errors.displayName && "Nombre requerido"} {...register("displayName", {required: true})}/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="e-mail" type="email" placeholder="correo@mail.com" error={errors.email !== undefined} helperText={errors.email && "email requerido"} {...register("email", {required: true})}/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Contraseña" type="password" placeholder="contraseña" error={errors.password !== undefined} helperText={errors.password && "Contraseña es obligatoria"} {...register("password", {required: true})}/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Confirma contraseña" type="password" placeholder="confirma contraseña" error={errors.password2 !== undefined} helperText={errors.password2 && errors.password2.message}
                            {...register("password2", {validate: (value) => value === watch("password") || "Las contraseñas no coinciden"})}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <Button fullWidth variant="contained" color="primary" type="submit">Crear cuenta</Button>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"end"}>
                    <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color="info" to="/auth/login">ingresar</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
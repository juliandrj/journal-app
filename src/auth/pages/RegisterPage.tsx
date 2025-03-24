import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear cuenta">
            <form>
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Nombre completo" type="text" placeholder="nombre completo"/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="e-mail" type="email" placeholder="correo@mail.com"/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="Contraseña" type="password" placeholder="contraseña"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <Button fullWidth variant="contained" color="primary">Crear cuenta</Button>
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
import { Google } from "@mui/icons-material"
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="e-mail" type="email" placeholder="correo@mail.com"/>
                    </Grid>
                    <Grid size={{xs:12}} sx={{mt: 2}}>
                        <TextField fullWidth label="contraseña" type="password" placeholder="contraseña"/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button fullWidth variant="contained" color="primary">Login</Button>
                    </Grid>
                    <Grid size={{xs:12, sm:6}} sx={{mt: 2}}>
                        <Button fullWidth variant="contained" color="primary">
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

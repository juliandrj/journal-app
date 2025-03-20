import { Google } from "@mui/icons-material"
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Link as RouterLink } from "react-router-dom"

export const LoginPage = () => {
    return (
        <Grid container spacing={0} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}>
            <Grid size={{xs: 12, sm: 10, md: 8}} className="box-shadow" sx={{backgroundColor: 'background.paper', borderRadius: 2, padding: 3}}>
                <Typography variant="h5" sx={{mb:1}}>Login</Typography>
                <form>
                    <Grid container>
                        <Grid size={{xs:12}} sx={{mt: 2}}>
                            <TextField fullWidth label="e-mail" type="email" placeholder="correo@mail.com"/>
                        </Grid>
                        <Grid size={{xs:12}} sx={{mt: 2}}>
                            <TextField fullWidth label="contraseña" type="password" placeholder="contraseña"/>
                        </Grid>
                    </Grid>
                    <Grid container>
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
            </Grid>
        </Grid>
    )
}

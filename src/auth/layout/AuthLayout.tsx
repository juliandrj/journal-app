import { Grid2 as Grid, Typography } from "@mui/material"
import { AuthLayoutProps } from "../../interfaces"

export const AuthLayout = ({title, children} : AuthLayoutProps) => {
    return (
        <Grid container spacing={0} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}>
            <Grid size={{xs: 12, sm: 10, md: 8}} className="box-shadow" sx={{backgroundColor: 'background.paper', borderRadius: 2, padding: 3}}>
                <Typography variant="h5" sx={{mb:1}}>{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}

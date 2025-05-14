import { CircularProgress, Grid2 as Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid container spacing={0} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}>
            <Grid size={{xs: 12, sm: 10, md: 8}} alignItems={"center"} sx={{textAlign: "center"}}>
                <CircularProgress color="warning" className="animate__animated animate__fadeIn animate__faster" />
            </Grid>
        </Grid>
    )
}

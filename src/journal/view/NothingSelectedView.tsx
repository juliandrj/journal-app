import { StarOutline } from "@mui/icons-material"
import { Grid2 as Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight: 'calc(100vh - 7em)', backgroundColor: 'primary.main', padding: 4, borderRadius: 3}}>
            <Grid size={{xs: 12}} textAlign={'center'}>
                <StarOutline sx={{fontSize: 100, color: 'white'}} />
            </Grid>
            <Grid size={{xs: 12}} textAlign={'center'}>
                <Typography sx={{color: 'white'}} variant="h5">Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}

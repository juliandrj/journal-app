import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2 as Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
export const NoteView = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1}}>
                <Typography fontSize={39} fontWeight="light">Hola mundo!</Typography>
                <Button color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
                <Grid container size={{xs: 12}}>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un título' label='Título' sx={{border: 'none', mb: 1}} />
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedió hoy?' minRows={5} />
                </Grid>
                <ImageGallery />
            </Grid>
        </>
    )
}

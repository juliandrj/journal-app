import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2 as Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Note } from '../../interfaces';
import { useEffect, useMemo } from 'react';
import { startUpdateNote } from '../../store/journal';
export const NoteView = () => {
    const dispatch = useAppDispatch();
    const {active:note, isSaving} = useSelector((state:RootState) => state.journal);
    const { register,
            handleSubmit,
            reset,
            formState: { errors },
    } = useForm<Note>({defaultValues: note});
    useEffect(() => {
        reset(note);
    }, [note])
    const onSubmit: SubmitHandler<Note> = (data) => {
        dispatch(startUpdateNote(data));
    }
    const fecha = useMemo(() => {
        return !!!note ? 'Sin fecha' : new Date(note.date).toUTCString();
    }, [note?.date]);
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1}}>
                <Typography fontSize={39} fontWeight="light">{fecha}</Typography>
                <Button color='primary' sx={{padding: 2}} disabled={isSaving} onClick={handleSubmit(onSubmit)}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
                <Grid container size={{xs: 12}}>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un título' label='Título' sx={{border: 'none', mb: 1}}
                        error={errors.head !== undefined} helperText={errors.head && "Título obligatorio"} {...register("head", {required: true})} />
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedió hoy?' minRows={5}
                        error={errors.body !== undefined} helperText={errors.body && "Descripción requerida"} {...register("body", {required: true})} />
                </Grid>
                <ImageGallery />
            </Grid>
        </>
    )
}

import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material';
import { Grid2 as Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Note } from '../../interfaces';
import { useEffect, useMemo, useRef } from 'react';
import { startDeleteNote, startUpdateNote, startUploadFile } from '../../store/journal';

export const NoteView = () => {
    const dispatch = useAppDispatch();
    const {active:note, isSaving} = useSelector((state:RootState) => state.journal);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { register,
            handleSubmit,
            reset,
            getValues,
            formState: { errors },
    } = useForm<Note>({defaultValues: note});
    useEffect(() => {
        reset(note);
    }, [note])
    const onSubmit: SubmitHandler<Note> = (data) => {
        dispatch(startUpdateNote(data));
    };
    const onChangeFiles = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
        if (target.files && target.files.length > 0) {
            const note: Note = getValues();
            dispatch(startUploadFile(note, target.files as FileList));
        }
    };
    const onDeleteClick = () => {
        dispatch(startDeleteNote());
    };
    const fecha = useMemo(() => {
        return !!!note ? 'Sin fecha' : new Date(note.date).toUTCString();
    }, [note?.date]);
    return (
        <>
            <Grid container direction="row" sx={{ mb: 1}}>
                <Grid size={{sm: 12, md: 8}}>
                    <Typography fontSize={24} fontWeight="light">{fecha}</Typography>
                </Grid>
                <Grid size={{sm: 12, md: 4}} container justifyContent="end">
                    <IconButton color='error' sx={{padding: 2}} disabled={isSaving} onClick={onDeleteClick} >
                        <DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
                    </IconButton>
                    <input type='file' multiple onChange={onChangeFiles} style={{display: 'none'}} ref={fileInputRef} />
                    <IconButton color='primary' sx={{padding: 2}} disabled={isSaving} onClick={() => fileInputRef.current?.click()}>
                        <UploadFileOutlined sx={{ fontSize: 30, mr: 1 }} />
                    </IconButton>
                    <IconButton color='primary' sx={{padding: 2}} disabled={isSaving} onClick={handleSubmit(onSubmit)}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    </IconButton>
                </Grid>
                <Grid container size={{xs: 12}}>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un título' label='Título' sx={{border: 'none', mb: 1}}
                        error={errors.head !== undefined} helperText={errors.head && "Título obligatorio"} {...register("head", {required: true})} />
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedió hoy?' minRows={5}
                        error={errors.body !== undefined} helperText={errors.body && "Descripción requerida"} {...register("body", {required: true})} />
                </Grid>
                <ImageGallery note={getValues()} />
            </Grid>
        </>
    )
}

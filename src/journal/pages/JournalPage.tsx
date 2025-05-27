import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import 'sweetalert2/dist/sweetalert2.css';
import Swal from "sweetalert2";
import { useEffect } from "react";

const drawerWidth = 240;

export const JournalPage = () => {
    const dispatch = useAppDispatch();
    const { isSaving, active, mensaje } = useSelector((state:RootState) => state.journal);
    useEffect(() => {
        if ( !!mensaje ) {
            Swal.fire( mensaje.titulo, mensaje.mensaje, mensaje.nivel );
        }
    }, [mensaje])
    
    const onClickNewNote = () => {
        dispatch(startNewNote());
    };
    return (
        <JournalLayout drawerWidth={drawerWidth}>
            { !!active ?
                <NoteView />
                : <NothingSelectedView />
            }
            <IconButton size="large" disabled={isSaving} onClick={onClickNewNote} sx={{color: 'white', backgroundColor: 'error.main', position: 'fixed', right: '2em', bottom: '2em', ':hover': {backgroundColor: 'error.dark', opacity: 0.9}}}>
                <AddOutlined />
            </IconButton>
        </JournalLayout>
    )
}

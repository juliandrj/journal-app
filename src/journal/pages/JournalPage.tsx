import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";

const drawerWidth = 240;

export const JournalPage = () => {
    const dispatch = useAppDispatch();
    const { isSaving, active } = useSelector((state:RootState) => state.journal);
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

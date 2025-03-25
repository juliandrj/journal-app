import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";

const drawerWidth = 240;

export const JournalPage = () => {
    return (
        <JournalLayout drawerWidth={drawerWidth}>
            <NothingSelectedView />
            {/* <NoteView /> */}
            <IconButton size="large" sx={{color: 'white', backgroundColor: 'error.main', position: 'fixed', right: '2em', bottom: '2em', ':hover': {backgroundColor: 'error.dark', opacity: 0.9}}}>
                <AddOutlined />
            </IconButton>
        </JournalLayout>
    )
}

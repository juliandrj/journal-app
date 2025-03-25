import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"

const drawerWidth = 240;

export const JournalPage = () => {
    return (
        <JournalLayout drawerWidth={drawerWidth}>
            <Typography variant={'h1'}>Journal</Typography>
        </JournalLayout>
    )
}

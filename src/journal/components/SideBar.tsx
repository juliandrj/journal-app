import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { DrawerWidthComponentProps } from "../../interfaces"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({drawerWidth} : DrawerWidthComponentProps) => {
    const {user} = useSelector((state:RootState) => state.auth);
    const {notes} = useSelector((state:RootState) => state.journal);
    return (
        <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer variant="permanent" open sx={{display: {sm: 'block'}, '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map((note) => (
                            <SideBarItem key={note.id} note={note} />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}

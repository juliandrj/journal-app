import { Box, Toolbar } from "@mui/material"
import { JournalLayoutProps } from "../../interfaces"
import { NavBar, SideBar } from "../components"

export const JournalLayout = ({children, drawerWidth} : JournalLayoutProps) => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavBar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />
            <Box component={'main'} sx={{flexGrow: 1, p: 3}}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}

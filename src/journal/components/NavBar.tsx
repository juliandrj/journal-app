import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography, Grid2 as Grid } from '@mui/material';
import { DrawerWidthComponentProps } from "../../interfaces"

export const NavBar = ({drawerWidth} : DrawerWidthComponentProps) => {
    return (
        <AppBar position='fixed' sx={{width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {sm: `${drawerWidth}px`}}}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, display: {sm: 'none'}}}>
                    <MenuOutlined />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    Journal
                </Typography>
                <IconButton edge="end" color="error">
                    <LogoutOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

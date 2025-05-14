import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { DrawerWidthComponentProps } from "../../interfaces"
import { startLogout } from "../../store/auth";
import { useAppDispatch } from "../../store";

export const NavBar = ({drawerWidth} : DrawerWidthComponentProps) => {
    const dispatch = useAppDispatch();
    const onLogout = () => {
        dispatch(startLogout());
    }
    return (
        <AppBar position='fixed' sx={{width: {sm: `calc(100% - ${drawerWidth}px)`}, ml: {sm: `${drawerWidth}px`}}}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, display: {sm: 'none'}}}>
                    <MenuOutlined />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    Journal
                </Typography>
                <IconButton edge="end" color="error" onClick={onLogout}>
                    <LogoutOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

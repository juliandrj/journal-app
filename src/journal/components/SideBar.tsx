import { Box, Divider, Drawer, Grid2 as Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { DrawerWidthComponentProps } from "../../interfaces"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({drawerWidth} : DrawerWidthComponentProps) => {
    return (
        <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer variant="permanent" open sx={{display: {sm: 'block'}, '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Julian Rojas
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <Grid size={{xs: 12}}>
                                            <ListItemText primary={text}/>
                                        </Grid>
                                        <Grid size={{xs: 12}}>
                                            <ListItemText secondary="algo algo algo" />
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}

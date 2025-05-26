import { Grid2 as Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { SideBarItemProps } from "../../interfaces"
import { TurnedInNot } from "@mui/icons-material"

export const SideBarItem = ({note}:SideBarItemProps) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <Grid size={{xs: 12}}>
                        <ListItemText primary={note.head}/>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <ListItemText secondary={note.body} />
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

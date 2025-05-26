import { Grid2 as Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { SideBarItemProps } from "../../interfaces"
import { TurnedInNot } from "@mui/icons-material"
import { useAppDispatch } from "../../store"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({note}:SideBarItemProps) => {
    const dispatch = useAppDispatch();
    const onClickVerNota = () => {
        dispatch(setActiveNote(note));
    };
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickVerNota}>
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

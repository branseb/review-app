import { Collapse, List, ListItem } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { examples } from "../main";
import { Header } from "./header";
import { Menu } from "./menu";

const useStyles = makeStyles({ name: 'app' })(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    menuAndContent: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        gap: 10
    },
    collapsible: {
        transitionDuration: '50ms'
    }
}))

export const App = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { classes } = useStyles();
    const navigate = useNavigate();

    const toogleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    return (
        <div className={classes.root}>
            <Header onMenuIconClick={() => toogleMenu()} />
            <div className={classes.menuAndContent}>
                <Collapse className={classes.collapsible} in={openMenu} orientation="horizontal">
                    <Menu>
                        <List >
                            {examples.map(item =>
                                <ListItem key={item.text} onClick={() => navigate(item.path)} button >{item.text}</ListItem>
                            )}
                        </List>
                    </Menu>
                </Collapse>
                <Outlet />
            </div>
        </div>
    )
}
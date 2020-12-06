import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

const Navbar = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="hamburger">
                    <Menu />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Restaurant
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

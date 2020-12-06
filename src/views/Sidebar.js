import { Paper, Typography } from "@material-ui/core";
import { Apps, EmojiFoodBeverage, Fastfood, Nature } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../components/Styles";

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Link to="/" className={classes.link}>
                    <Apps className={classes.icon} />
                    <Typography
                        variant="subtitle2"
                        className={classes.sideBarMenuSubTitle}>
                        All
                    </Typography>
                </Link>
            </Paper>
            <Paper className={classes.paper}>
                <Link to="/category/starter" className={classes.link}>
                    <EmojiFoodBeverage className={classes.icon} />
                    <Typography
                        variant="subtitle2"
                        className={classes.sideBarMenuSubTitle}>
                        Starter
                    </Typography>
                </Link>
            </Paper>
            <Paper className={classes.paper}>
                <Link to="/category/veg" className={classes.link}>
                    <Nature className={classes.icon} />
                    <Typography
                        variant="subtitle2"
                        className={classes.sideBarMenuSubTitle}>
                        Veg
                    </Typography>
                </Link>
            </Paper>
            <Paper className={classes.paper}>
                <Link to="/category/non-veg" className={classes.link}>
                    <Fastfood className={classes.icon} />
                    <Typography
                        variant="subtitle2"
                        className={classes.sideBarMenuSubTitle}>
                        Non-veg
                    </Typography>
                </Link>
            </Paper>
        </div>
    );
};

export default Sidebar;

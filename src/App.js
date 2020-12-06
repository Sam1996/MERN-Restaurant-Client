import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Sidebar from "./views/Sidebar";
import { Grid } from "@material-ui/core";
import "./App.css";
import { useStyles } from "./components/Styles";
import Categories from "./views/Categories";
import Orders from "./views/Orders";
import Billing from "./views/Billing";

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Grid container className={classes.mainGrid}>
                    <Grid
                        item
                        md={1}
                        style={{ height: "inherit", overflow: "auto" }}>
                        <Sidebar />
                    </Grid>
                    <Grid
                        item
                        md={7}
                        style={{ height: "inherit", overflow: "auto" }}
                        className={classes.padding}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/category/:category"
                                component={Categories}
                            />
                            <Route path="/billing" component={Billing} />
                        </Switch>
                    </Grid>
                    <Grid
                        item
                        md={4}
                        style={{ height: "inherit", overflow: "auto" }}>
                        <Orders />
                    </Grid>
                </Grid>
            </Fragment>
        </Router>
    );
};

export default App;

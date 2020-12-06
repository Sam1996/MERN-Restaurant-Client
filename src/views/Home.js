import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { useStyles } from "../components/Styles";
import { config } from "../config";

const Home = () => {
    const [foods, setFoods] = useState([]);
    const classes = useStyles();

    const getFoods = () => {
        Axios.get(`${config.api.path}/foods`).then((result) => {
            if (result.status === 200) setFoods(result.data);
        });
    };

    useEffect(getFoods, []);

    return (
        <Grid container alignItems="stretch" spacing={2}>
            {foods.map((food, i) => (
                <FoodCard key={i} food={food} />
            ))}
        </Grid>
    );
};

export default Home;

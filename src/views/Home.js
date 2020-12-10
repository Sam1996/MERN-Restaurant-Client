import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import LoadingIndicator from "../components/LoadingIndicator";
import { config } from "../config";

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFoods = () => {
        Axios.get(`${config.api.path}/foods`).then((result) => {
            if (result.status === 200) {
                setFoods(result.data);
                setLoading(false);
            }
        });
    };

    useEffect(getFoods, []);

    return (
        <Grid container alignItems="stretch" spacing={2}>
            {loading
                ? [...Array(6)].map((i) => <LoadingIndicator key={i} />)
                : foods.map((food, i) => <FoodCard key={i} food={food} />)}
        </Grid>
    );
};

export default Home;

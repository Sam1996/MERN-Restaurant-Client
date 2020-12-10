import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import LoadingIndicator from "../components/LoadingIndicator";
import { config } from "../config";

const Categories = (props) => {
    const category = props.match.params.category;
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategoryData = () => {
        Axios.get(`${config.api.path}/category/${category}`).then((result) => {
            if (result.status === 200) {
                setFoods(result.data);
                setLoading(false);
            }
        });
    };

    useEffect(getCategoryData, [category]);

    return (
        <Grid container alignItems="stretch" spacing={2}>
            {loading
                ? [...Array(6)].map((i) => <LoadingIndicator key={i} />)
                : foods.map((food, i) => <FoodCard key={i} food={food} />)}
        </Grid>
    );
};

export default Categories;

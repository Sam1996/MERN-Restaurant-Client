import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { config } from "../config";

const Categories = (props) => {
    const category = props.match.params.category;
    const [foods, setFoods] = useState([]);

    const getCategoryData = () => {
        Axios.get(`${config.api.path}/category/${category}`).then((result) => {
            if (result.status === 200) setFoods(result.data);
        });
    };

    useEffect(getCategoryData, [category]);

    return (
        <Grid container alignItems="stretch" spacing={2}>
            {foods.map((food, i) => (
                <FoodCard key={i} food={food} />
            ))}
        </Grid>
    );
};

export default Categories;

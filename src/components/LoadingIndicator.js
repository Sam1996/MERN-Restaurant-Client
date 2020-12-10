import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const LoadingIndicator = () => {
    return (
        <Grid item xs={4}>
            <Skeleton variant="rect" height={200} />
            <Skeleton height={40} />
            <Skeleton />
        </Grid>
    );
};

export default LoadingIndicator;

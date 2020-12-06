import { Fab, Grid, Paper } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setAction } from "../Action/actions";
import { ADDORDERTOQUEUE } from "../Action/types";
import { useStyles } from "./Styles";

const FoodCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const addToOrder = (e, item, qty) => {
        e.preventDefault();
        let payload = {
            id: item._id,
            name: item.name,
            price: item.price,
            picture: item.picture,
            quantity: qty,
            total: item.price * qty,
        };
        dispatch(setAction(ADDORDERTOQUEUE, payload));
    };

    return (
        <Grid item md={4}>
            <Paper
                className={classes.cardView}
                style={{
                    backgroundImage: `url(${props.food.picture})`,
                }}
                elevation={1}>
                <div className={classes.overlay}></div>
                <div className={classes.dataArea}>
                    <div>
                        <p
                            style={{
                                color: "#ffffff",
                                margin: 0,
                            }}>
                            <b>{props.food.name}</b>
                        </p>
                        <p
                            style={{
                                color: "#ffffff",
                                margin: 0,
                            }}>
                            <b>&#8377;{props.food.price}</b>
                        </p>
                    </div>
                    <Fab
                        aria-label="add"
                        className={classes.fab}
                        onClick={(e) => addToOrder(e, props.food, 1)}>
                        <Add />
                    </Fab>
                </div>
            </Paper>
        </Grid>
    );
};

export default FoodCard;

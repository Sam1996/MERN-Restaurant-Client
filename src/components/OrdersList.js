import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setAction } from "../Action/actions";
import { UPDATEORDERTOQUEUE, DELETEORDERFROMQUEUE } from "../Action/types";
import { useStyles } from "./Styles";

const OrdersList = ({ order, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const incQty = (e, index) => {
        e.preventDefault();
        dispatch(
            setAction(UPDATEORDERTOQUEUE, {
                index: index,
                quantity: order.quantity + 1,
                total: order.total + order.price,
            })
        );
    };

    const decQty = (e, index) => {
        e.preventDefault();
        if (order.quantity > 1) {
            dispatch(
                setAction(UPDATEORDERTOQUEUE, {
                    index: index,
                    quantity: order.quantity - 1,
                    total: order.total - order.price,
                })
            );
        }
        return;
    };

    const deleteItem = (e, index) => {
        e.preventDefault();
        dispatch(setAction(DELETEORDERFROMQUEUE, { index: index }));
    };

    return (
        <List dense>
            <ListItem>
                <ListItemIcon>
                    <IconButton
                        className={classes.incDecIcon}
                        onClick={(e) => deleteItem(e, index)}>
                        <Delete />
                    </IconButton>
                </ListItemIcon>
                <ListItemAvatar>
                    <Avatar src={order.picture} alt={order.name} />
                </ListItemAvatar>
                <ListItemText
                    primary={order.name}
                    secondary={<>@ &#8377;{order.total}</>}
                />
                <ListItemSecondaryAction className={classes.alignHorizontal}>
                    <Paper
                        className={`${classes.alignHorizontal} ${classes.qtyContainer}`}>
                        <IconButton
                            className={classes.incDecIcon}
                            onClick={(e) => decQty(e, index)}>
                            <Remove />
                        </IconButton>
                        <Typography
                            variant="body1"
                            component="p"
                            className={classes.qtyArea}>
                            {order.quantity}
                        </Typography>
                        <IconButton
                            className={classes.incDecIcon}
                            onClick={(e) => incQty(e, index)}>
                            <Add />
                        </IconButton>
                    </Paper>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
};

export default OrdersList;

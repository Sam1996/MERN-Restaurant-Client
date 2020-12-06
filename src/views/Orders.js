import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAction } from "../Action/actions";
import { PROCESSORDERFROMQUEUE, RESETORDERQUEUE } from "../Action/types";
import OrdersList from "../components/OrdersList";
import { useStyles } from "../components/Styles";

const Orders = () => {
    const classes = useStyles();
    const orders = useSelector((state) => state.orders);
    const processedOrders = useSelector((state) => state.processedOrders);
    const [subTotal, setSubTotal] = useState(0);
    const dispatch = useDispatch();

    const placeOrder = (e) => {
        e.preventDefault();
        if (orders.length) {
            dispatch(setAction(PROCESSORDERFROMQUEUE, orders));
        }
        return;
    };

    useEffect(() => {
        let total = orders.reduce((order, { total }) => order + total, 0);
        setSubTotal(total);
    }, [orders]);

    useEffect(() => {
        if (processedOrders.length !== 0) dispatch(setAction(RESETORDERQUEUE));
    }, [processedOrders]);

    return (
        <Grid container className={classes.orderWindowContainer}>
            <Grid item component={Card} className={classes.orderWindow}>
                <CardHeader
                    title="Orders"
                    subheader="Select item from the menu to place order"
                    className={classes.orderBookHeader}
                />
                <CardContent
                    className={`${classes.noVerticalPadding} ${classes.noHorizontalPadding} ${classes.orderCardContent}`}>
                    {orders &&
                        orders.map((order, i) => (
                            <OrdersList order={order} index={i} key={i} />
                        ))}
                </CardContent>
                <CardActions>
                    <TableContainer>
                        <Table size="small">
                            <TableBody>
                                {orders.length !== 0 && (
                                    <>
                                        <TableRow>
                                            <TableCell
                                                className={
                                                    classes.noBorderBottom
                                                }>
                                                TOTAL
                                            </TableCell>
                                            <TableCell
                                                className={
                                                    classes.noBorderBottom
                                                }
                                                align="right">
                                                <Typography
                                                    variant="body1"
                                                    component="p">
                                                    <b>&#8377;{subTotal}</b>
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell
                                                className={
                                                    classes.noBorderBottom
                                                }
                                                colSpan={2}>
                                                <Button
                                                    color="primary"
                                                    fullWidth
                                                    onClick={(e) =>
                                                        placeOrder(e)
                                                    }>
                                                    Place order
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )}
                                {processedOrders.length !== 0 && (
                                    <TableRow>
                                        <TableCell
                                            className={classes.noBorderBottom}
                                            colSpan={2}>
                                            <Button
                                                component={Link}
                                                to="/billing"
                                                fullWidth>
                                                Pay bill
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardActions>
            </Grid>
        </Grid>
    );
};

export default Orders;

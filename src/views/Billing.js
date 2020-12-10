import {
    Avatar,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    Grid,
    Button,
    Checkbox,
    Dialog,
    DialogTitle,
    DialogContent,
    LinearProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../Action/actions";
import { RESETPROCESSQUEUE } from "../Action/types";

const Billing = (props) => {
    const processedOrders = useSelector((state) => state.processedOrders);
    const subTotal = getSubTotal();
    const [grandTotal, setGrandTotal] = useState(0);
    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();

    const handleCheckBox = () => {
        setChecked(!checked);
    };

    function getSubTotal() {
        return (
            processedOrders.reduce((order, { total }) => order + total, 0) || 0
        );
    }

    const getGrandTotal = () => {
        if (checked) {
            let percent = 10 / 100;
            let tenOfTotal = subTotal * percent;
            let grand = subTotal + tenOfTotal;
            setGrandTotal(grand);
        } else {
            setGrandTotal(subTotal);
        }
    };

    const makePayment = () => {
        setOpen(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setOpen(false);
                dispatch(setAction(RESETPROCESSQUEUE));
                props.history.push("/");
            }, 3000);
        }, 4000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(getGrandTotal, [checked, subTotal]);

    return (
        <>
            <TableContainer component={Paper} style={{ marginBottom: "15px" }}>
                <Table>
                    <TableHead>
                        <TableCell></TableCell>
                        <TableCell>
                            <b>ITEM</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>QUANTITY</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>PRICE</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>TOTAL</b>
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        {processedOrders.map((order, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <Avatar src={order.picture} />
                                </TableCell>
                                <TableCell>{order.name}</TableCell>
                                <TableCell align="right">
                                    {order.quantity}
                                </TableCell>
                                <TableCell align="right">
                                    &#8377;{order.price}
                                </TableCell>
                                <TableCell align="right">
                                    &#8377;{order.total}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justify="flex-end" style={{ marginBottom: "15px" }}>
                <Grid item xs={6}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <b>SUB TOTAL</b>
                                    </TableCell>
                                    <TableCell align="right">
                                        &#8377;{subTotal}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 0 }}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleCheckBox}
                                        />
                                        <b>TIP</b>
                                    </TableCell>
                                    <TableCell align="right">+10%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <b>GRAND TOTAL</b>
                                    </TableCell>
                                    <TableCell align="right">
                                        &#8377;{grandTotal}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid item xs={6} component={Paper}>
                    <Button color="primary" fullWidth onClick={makePayment}>
                        MAKE PAYMENT
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                onClose={handleClose}
                aria-labelledby="payment-dialog"
                open={open}>
                <DialogTitle id="payment-dialog">
                    {!success ? `Payment processing` : `Payment success`}
                </DialogTitle>
                <DialogContent style={{ marginBottom: "18px" }}>
                    {loading && <LinearProgress color="secondary" />}
                    {success && `You will be redirected in few seconds`}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Billing;

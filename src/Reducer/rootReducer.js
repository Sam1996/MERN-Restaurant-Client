import { combineReducers } from "redux";
import { orderReducer } from "./ordersReducer";
import { processedOrderReducer } from "./processedOrderReducer";

export default combineReducers({
    orders: orderReducer,
    processedOrders: processedOrderReducer,
});

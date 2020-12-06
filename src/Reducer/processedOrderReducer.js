import { PROCESSORDERFROMQUEUE, RESETPROCESSQUEUE } from "../Action/types";
const initialState = [];

export const processedOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROCESSORDERFROMQUEUE:
            return [...state, ...action.payload];
        case RESETPROCESSQUEUE:
            return initialState;
        default:
            return state;
    }
};

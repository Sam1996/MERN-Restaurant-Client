import {
    ADDORDERTOQUEUE,
    DELETEORDERFROMQUEUE,
    RESETORDERQUEUE,
    UPDATEORDERTOQUEUE,
} from "../Action/types";

const initialState = [];

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDORDERTOQUEUE:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    picture: action.payload.picture,
                    quantity: action.payload.quantity,
                    total: action.payload.total,
                },
            ];
        case UPDATEORDERTOQUEUE:
            return state.map((order, i) =>
                i === action.payload.index
                    ? {
                          ...order,
                          quantity: action.payload.quantity,
                          total: action.payload.total,
                      }
                    : order
            );
        case DELETEORDERFROMQUEUE:
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index + 1),
            ];
        case RESETORDERQUEUE:
            return initialState;
        default:
            return state;
    }
};

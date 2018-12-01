import { CUSTOMERS_LIST_ADD, CUSTOMERS_LIST_POPULATE } from '../actions/types'

export default function (state = [], action){

    switch (action.type) {
        case CUSTOMERS_LIST_ADD:
            return [action.payload, ...state];
        case CUSTOMERS_LIST_POPULATE:
            state = action.payload;
            return state ;
        default:
            return state;
    }

}
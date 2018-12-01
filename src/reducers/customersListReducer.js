import { CUSTOMERSLISTADD } from '../actions/types'

export default function (state = [], action){

    switch (action.type) {
        case CUSTOMERSLISTADD:
            return [...state, action.payload];     
        default:
            return state;
    }

}
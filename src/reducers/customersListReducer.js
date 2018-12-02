import {
  CUSTOMERS_LIST_ADD,
  CUSTOMERS_LIST_POPULATE,
  CUSTOMER_DELETE,
  CUSTOMER_EDIT,
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case CUSTOMERS_LIST_ADD:
      return [action.payload, ...state];
    case CUSTOMERS_LIST_POPULATE:
      state = action.payload;
      return state;
    case CUSTOMER_DELETE:
      state = state.filter(customer => {
        return customer._id !== action.payload;
      });
      return state;
    case CUSTOMER_EDIT:
    console.log(action.payload)
      state = state.map(customer => {
        if (customer._id === action.payload._id) 
          return action.payload;
        else {
          return customer;
        }
      });
      return state;
    default:
      return state;
  }
}

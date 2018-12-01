import { combineReducers } from "redux";
import customersListReducer from "./customersListReducer";
import customerFiltredListReducer from "./customerFiltredListReducer";

export default combineReducers({
  cusomersList: customersListReducer,
  customerFiltredList: customerFiltredListReducer
});

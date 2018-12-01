import { combineReducers } from 'redux';
import customersListReducer from './customersListReducer'
export default combineReducers({
    cusomersList :customersListReducer,
})
import _ from "lodash";
import { CUSTOMERS_FILTER, CUSTOMERS_FILTER_INITIALISE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case CUSTOMERS_FILTER:
      var search = action.payload;
      state = _.filter(state, item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      return state;
    case CUSTOMERS_FILTER_INITIALISE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}

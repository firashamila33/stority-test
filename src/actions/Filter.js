import {
    CUSTOMERS_FILTER,
    CUSTOMERS_FILTER_INITIALISE,
  } from "./types";

  export const filterCustomers = (filter) => {
    return {
      type: CUSTOMERS_FILTER,
      payload: filter,
    };
  };
  

export const initializeFilter = cusomersList => {
    return {
      type: CUSTOMERS_FILTER_INITIALISE,
      payload: cusomersList,
    };
  };
  
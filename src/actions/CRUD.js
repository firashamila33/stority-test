import { CUSTOMERS_LIST_ADD, CUSTOMER_DELETE, CUSTOMER_EDIT } from "./types";

export const addCustomer = customer => {
  return {
    type: CUSTOMERS_LIST_ADD,
    payload: customer
  };
};

export const deleteCustomer = _id => {
  return {
    type: CUSTOMER_DELETE,
    payload: _id
  };
};

export const editCustomer = customer => {
  console.log('biiiithchchchwiupghipdrsgjlkdomf')
  return {
    type: CUSTOMER_EDIT,
    payload: customer
  };
};

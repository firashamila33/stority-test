import { CUSTOMERSLISTADD, CUSTOMERS_FILTER } from './types'

export const addCustomer = (customer) => {
    return {
        type: CUSTOMERSLISTADD,
        payload: customer,
    }
}


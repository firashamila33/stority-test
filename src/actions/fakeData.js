import {
    CUSTOMERS_LIST_POPULATE,
  } from "./types";
  import _ from "lodash";
  import faker from "faker/locale/de";

  
  export const populate_fake_customers = customers_count => {
    const list = _.range(0, customers_count).map(e => {
      const _id = Math.floor(Math.random() * 999999999) + 990000;
      const name = faker.fake("{{name.lastName}}");
      const avatar = faker.fake("{{internet.avatar}}");
      const sex = Math.random() < 0.5 ? "female" : "male";
      const birthDate = new Date(faker.fake("{{date.past}}"))
        .toISOString()
        .slice(0, 10);
      return { _id, name, sex, birthDate, avatar };
    });
    return {
      type: CUSTOMERS_LIST_POPULATE,
      payload: list
    };
  };
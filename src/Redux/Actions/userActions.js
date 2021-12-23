import { CHANGE_USER } from "../Types/types";

export const changeUser = (name, workPlace, date) => {
  return {
    type: CHANGE_USER,
    payload: { name, workPlace, date },
  };
};

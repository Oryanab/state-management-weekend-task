import { CHANGE_USER } from "../Types/types";
const initialState = {
  name: "Guest",
  workPlace: "Not Provided",
  date: new Date().toLocaleDateString(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return (state = {
        name: action.payload.name,
        workPlace: action.payload.workPlace,
        date: action.payload.date,
      });
    default:
      return state;
  }
};

export default userReducer;

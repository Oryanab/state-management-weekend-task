import { combineReducers } from "redux";
import counterReducer from "../Reducers/counterReducer";
import userReducer from "../Reducers/userReducer";
import equipmentReducer from "../Reducers/equipmentReducer";
import { createStore } from "redux";

const AppReducers = combineReducers({
  counter: counterReducer,
  equipment: equipmentReducer,
  user: userReducer,
});

const store = createStore(AppReducers);

export default store;

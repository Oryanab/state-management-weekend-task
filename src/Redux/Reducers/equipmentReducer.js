import { fullEquipmentList } from "../../Database/fullEquipmentList";
import { GET_EQUIPMENTS, ADD_EQUIPMENT, UPDATE_CURRENT } from "../Types/types";

const initialState = fullEquipmentList.map((obj) => ({
  ...obj,
  current: 0,
  missing: obj.fullQuantity - 0,
}));

// {name, fullQuantity, current, missing}

const equipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EQUIPMENTS:
      return [...state];
    case ADD_EQUIPMENT:
      const newEquipment = {
        name: action.payload.name,
        fullQuantity: action.payload.fullQuantity,
        current: action.payload.current,
        missing: action.payload.fullQuantity - action.payload.current,
      };
      return [...state, newEquipment];
    case UPDATE_CURRENT:
      let currentItem = state.find((item) => item.name === action.payload.name);
      currentItem.missing = currentItem.fullQuantity - action.payload.current;
      if (currentItem.missing <= 0) {
        currentItem.missing = "none:)";
      }
      return [...state];
    default:
      return state;
  }
};

export default equipmentReducer;

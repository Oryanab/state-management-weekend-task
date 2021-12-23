import { GET_EQUIPMENTS, ADD_EQUIPMENT, UPDATE_CURRENT } from "../Types/types";

export const getEquipmentList = () => {
  return {
    type: GET_EQUIPMENTS,
  };
};

export const addNewEquipment = (name, fullQuantity, current) => {
  return {
    type: ADD_EQUIPMENT,
    payload: { name, fullQuantity, current },
  };
};

export const updateSingleEquipment = (name, current) => {
  return {
    type: UPDATE_CURRENT,
    payload: { name, current },
  };
};

import * as actionTypes from "../constants/actionTypes.js";

const initialState = 1000;

export const salary = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SALARY:
      state = initialState - action.usedMoney;
      return state;
    default:
      return state;
  }
};

export default salary;

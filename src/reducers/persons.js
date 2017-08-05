import { createStore } from "redux";
import * as actionTypes from "../constants/actionTypes.js";
import initialState from "../api/initial";

export const person = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      state[action.person.name] = action.person;
      return { ...state };
    case actionTypes.DELETE_PERSON:
      delete state[action.person.name];
      return { ...state };
    case actionTypes.EDIT_PERSON:
      state[action.name] = action.person;
      return { ...state };
    default:
      return state;
  }
};

const store = createStore(person);

export default store;

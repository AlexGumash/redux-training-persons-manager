import { combineReducers, createStore } from "redux";

import { person } from "./persons.js";
import { salary } from "./salary";

const rootReducer = combineReducers({
  person,
  salary
});

const store = createStore(rootReducer);

export default store;

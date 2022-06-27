import { createStore, combineReducers } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./deparments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
    })
  );

  return store;
};

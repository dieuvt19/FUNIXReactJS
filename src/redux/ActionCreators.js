import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { Link } from "react-router-dom";

import { baseUrlDepartments, baseUrlStaffs } from "../shared/baseUrl";

export const fetchStaffs = () => async (dispatch) => {
  try {
    dispatch(staffsLoading(true));

    const response = await fetch(baseUrlStaffs);
    const responseJSON = await response.json();

    dispatch(addStaffs(responseJSON));
  } catch (error) {
    console.log(error);

    dispatch(staffsFailed(error.message));
  }
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

// Add staff
export const addStaff = (staffObj) => {
  return (dispatch) => {
    axios
      .post(baseUrlStaffs, staffObj)
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.ADD_STAFF, payload: response.data });
        dispatch(fetchStaffs());
        dispatch(fetchDepartments());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Update staff
export const updateStaff = (staffUpdate) => {
  return function (dispatch) {
    axios
      .patch(baseUrlStaffs, staffUpdate)
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.UPDATE_STAFF, payload: response.data });
        dispatch(fetchStaffs());
        dispatch(fetchDepartments());
      })
      .catch((error) => console.log(error));
  };
};

// Delete staff
const staffDeleted = () => ({
  type: ActionTypes.DELETE_STAFF,
});

export const deleteStaff = (id) => {
  return function (dispatch) {
    axios
      .delete(baseUrlStaffs + `${id}`)
      .then((resp) => {
        console.log("resp: ", resp);
        dispatch(staffDeleted());
        dispatch(fetchStaffs());
        dispatch(fetchDepartments());
      })
      .catch((error) => console.log(error));
  };
};

// departments
export const fetchDepartments = () => async (dispatch) => {
  try {
    dispatch(departmentsLoading(true));

    const response = await fetch(baseUrlDepartments);
    const responseJSON = await response.json();

    dispatch(addDepartments(responseJSON));
  } catch (error) {
    console.log(error);

    dispatch(departmentsFailed(error.message));
  }
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments,
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

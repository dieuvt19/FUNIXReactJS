import * as ActionTypes from "./ActionTypes";

const initialState = {
  isLoading: false,
  errMess: null,
  staffs: [],
};

export const Staffs = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };

    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };

    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        staffs: [],
      };

    case ActionTypes.DELETE_STAFF:
      return { ...state, isLoading: false, errMess: null };

    case ActionTypes.UPDATE_STAFF:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };

    case ActionTypes.ADD_STAFF:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    default:
      return state;
  }
};

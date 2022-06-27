import * as ActionTypes from "./ActionTypes";

export const addStaff = (
  name,
  doB,
  startDate,
  department,
  salaryScale,
  overTime,
  annualLeave
) => ({
  type: ActionTypes.ADD_STAFF,
  payload: {
    name: name,
    doB: doB,
    startDate: startDate,
    department: department,
    salaryScale: salaryScale,
    overTime: overTime,
    annualLeave: annualLeave,
  },
});

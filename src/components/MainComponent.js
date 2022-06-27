import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentsComponent";
import Salary from "./SalaryComponent";
import { addStaff } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addStaff: (
    name,
    doB,
    startDate,
    department,
    salaryScale,
    overTime,
    annualLeave
  ) =>
    dispatch(
      addStaff(
        name,
        doB,
        startDate,
        department,
        salaryScale,
        overTime,
        annualLeave
      )
    ),
});

function Main(props) {
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          props.staffs.filter(
            (item) => item.id === parseInt(match.params.staffId, 10)
          )[0]
        }
        addStaff={props.addStaff}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/staff"
          component={() => (
            <StaffList staffs={props.staffs} addStaff={props.addStaff} />
          )}
        />
        <Route path="/staff/:staffId" component={StaffWithId} />
        <Route
          exact
          path="/department"
          component={() => <Department dept={props.departments} />}
        />
        <Route
          path="/salary"
          component={() => <Salary staffs={props.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

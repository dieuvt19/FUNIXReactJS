import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentsComponent";
import Salary from "./SalaryComponent";

export default function Main() {
  const [nhanvien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={nhanvien.staffs.filter(
          (item) => item.id === parseInt(match.params.nhanvienId, 10)[0]
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/nhanvien"
          component={() => <StaffList staffs={nhanvien.staffs} />}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          exact
          path="/phongban"
          component={() => <Department dept={nhanvien.departments} />}
        />
        <Route
          path="/bangluong"
          component={() => <Salary staffs={nhanvien.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

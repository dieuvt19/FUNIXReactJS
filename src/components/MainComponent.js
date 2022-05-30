import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route } from "react-router-dom";
import StaffList from "./StaffListComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { useState } from "react";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentsComponent";
import Salary from "./SalaryComponent";

export default function Main() {
  const [nhanvien, setNhanVien] = useState({
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
          path="/luong"
          component={() => <Salary salary={nhanvien.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

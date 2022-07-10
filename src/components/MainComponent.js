import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentsComponent";
import DepartmentDetail from "./DepartmentDetailComponent";
import Salary from "./SalaryComponent";
import { fetchDepartments, fetchStaffs } from "../redux/ActionCreators";
import UpdateStaff from "./UpdateStaffComponent";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
  }, [dispatch]);
  return (
    <div>
      <Header />

      <Routes>
        <Route path="staff" element={<StaffList />} />
        <Route path="staff/:staffId" element={<StaffDetail />} />
        <Route path="department" element={<Department />} />
        <Route path="department/:departmentId" element={<DepartmentDetail />} />
        <Route path="salary" element={<Salary />} />
        <Route path="updatestaff/:staffId" element={<UpdateStaff />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default Main;

import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route } from "react-router-dom";
import StaffList from "./StaffListComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { useState } from "react";

export default function Main() {
  const [nhanvien, setNhanVien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });
  return (
    <div>
      <Header />
      <Route
        path="/nhanvien"
        component={() => <StaffList staffs={nhanvien.staffs} />}
      />
      <Footer />
    </div>
  );
}

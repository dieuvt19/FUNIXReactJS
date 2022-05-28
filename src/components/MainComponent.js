import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./StaffListComponent";
import { STAFFS } from "../shared/staffs";
import Salary from "./SalaryComponent";
import Departments from "./DepartmentsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <StaffList staffs={this.state.staffs} />
        <h4 className="container">Bấm vào tên nhân viên để xem thông tin.</h4>
        <Footer />
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList className="table-hover" staffs={this.state.staffs} />
        <h4 className="container">Bấm vào tên nhân viên để xem thông tin.</h4>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import styled from "styled-components";
import "./App.css";

const StaffListStyle = styled(StaffList)`
  &:hover {
    background-color: #e2e2e2;
    border-radius: 3px;
  }
`;

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
        <StaffList staffs={this.state.staffs} />
        <h4 className="container margin">
          Bấm vào tên nhân viên để xem thông tin.
        </h4>
      </div>
    );
  }
}

export default App;

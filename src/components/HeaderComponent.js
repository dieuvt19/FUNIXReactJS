import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavItem,
  Collapse,
} from "reactstrap";

export default function Header() {
  return (
    <div>
      <Navbar color="primary">
        <div className="container">
          <NavbarBrand>
            <img
              src="assets/images/logo.png"
              width="40"
              alt="logo quan ly nhan vien"
            />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <span className="fa fa-users fa-lg"></span>Nhân Viên
            </NavItem>
            <NavItem>
              <span className="fa fa-users fa-lg"></span>Phòng Ban
            </NavItem>
            <NavItem>
              <span className="fa fa-money fa-lg"></span>Bảng Lương
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

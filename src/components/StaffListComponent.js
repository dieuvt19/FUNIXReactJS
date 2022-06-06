import React, { useState } from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import TypeDepartments from "./TypeDepartments";
import { STAFFS } from "../shared/staffs";

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} value={staff.name} />
        <p className="col d-flex justify-content-center m-0">{staff.name}</p>
      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  console.log(props);

  const listStaff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2">
        <div className="m-1">
          <RenderStaffItem staff={staff} />
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <h3>Nhân Viên</h3>
      <hr />
      <div className="row ">{listStaff}</div>
    </div>
  );
};

export default StaffList;

import React from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffItem({ staff, onClick }) {
  console.log(staff);
  return (
    <Card>
      <Link to={`/listStaff/${staff.id}`}>
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
      <div key={staff.id}>
        <div className="col-12 m-1">
          <RenderStaffItem staff={staff} />
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <h3>Nhân Viên</h3>
      <hr />
      <div className="row">{listStaff}</div>
    </div>
  );
};

export default StaffList;

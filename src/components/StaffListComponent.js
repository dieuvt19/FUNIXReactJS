import React from "react";

export default function StaffList(props) {
  const listStaff = props.staffs.map((staff) => {
    return (
      <div key={staff.id}>
        <div className="col-12 m-1">
          <img src={staff.image} alt={staff.name} />
          <p>{staff.name}</p>
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
}

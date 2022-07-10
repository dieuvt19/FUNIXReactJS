import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";

function RenderStaff({ staff, staffDept, staffId }) {
  if (staff != null && staffDept != null) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <CardImg width="100%" src={staff.image} value={staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staffDept.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
            <Link to={`/updatestaff/${staffId}`}>
              <Button className="btn btn-warning">UPDATE</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default function StaffDetail() {
  const dataStaffs = useSelector((state) => state.staffs.staffs);

  const dataDepartments = useSelector((state) => state.departments.departments);

  console.log(dataDepartments);

  const { staffId } = useParams();

  const staff = dataStaffs.filter((staff) => staff.id === parseInt(staffId))[0];
  console.log(staff);
  const staffDept = dataDepartments.filter(
    (dept) => staff && dept.id === staff.departmentId
  )[0];
  console.log(staffDept);

  if (staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row mb-3">
          <RenderStaff staff={staff} staffDept={staffDept} staffId={staffId} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

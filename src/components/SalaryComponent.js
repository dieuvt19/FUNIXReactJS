import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const basicSalary = 3000000;
const overtimeSalary = 200000 / 8;

function RenderSalary({ staff }) {
  console.log(staff);
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2">{staff.name}</CardTitle>
      <CardBody>
        <CardText>Mã nhân viên: {staff.id}</CardText>
        <CardText>Hệ số lương: {staff.salaryScale}</CardText>
        <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
        <CardText className="bg-light p-2 shadow">
          Lương:
          {(
            staff.salaryScale * basicSalary +
            staff.overTime * overtimeSalary
          ).toFixed(0)}
        </CardText>
      </CardBody>
    </Card>
  );
}

const Salary = (props) => {
  console.log(props);
  const salary = props.staffs.map((ss) => {
    return (
      <div key={ss.id}>
        <div className="col-12 lg-4 md-6 sm-12 mt-2">
          <RenderSalary staff={ss} />
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};

export default Salary;

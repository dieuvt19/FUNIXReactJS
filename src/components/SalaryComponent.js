import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const basicSalary = 3000000;
const overtimeSalary = 200000;

function RenderSalary({ staff }) {
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

const Salary = () => {
  const dataStaffs = useSelector((state) => state.staffs.staffs);

  const [sortSalary, setSortSalary] = useState(false);
  const salary = dataStaffs
    .sort((a, b) =>
      sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale
    )
    .map((ss) => {
      return (
        <div key={ss.id} className="col-12 col-md-6 col-lg-4">
          <div className="mt-2">
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
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo hệ số lương
      </button>
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};

export default Salary;

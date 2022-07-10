import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RenderDept({ department }) {
  return (
    <Card>
      <Link to={`/department/${department.id}`}>
        <CardTitle className="m-2">{department.name}</CardTitle>
        <CardBody>
          <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </CardBody>
      </Link>
    </Card>
  );
}

function Department() {
  const dataDepartments = useSelector((state) => state.departments.departments);

  const departments = dataDepartments.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
        <RenderDept department={department} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row shadow m-3">{departments}</div>
    </div>
  );
}
export default Department;

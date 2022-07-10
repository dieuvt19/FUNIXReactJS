import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { Loading } from "./LoadingComponent";

function RenderDept({ department, errMess, isLoading }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <Link to={`/department/${department.id}`}>
            <CardTitle className="m-2">{department.name}</CardTitle>
            <CardBody>
              <CardText>
                Số lượng nhân viên: {department.numberOfStaff}
              </CardText>
            </CardBody>
          </Link>
        </Card>
      </FadeTransform>
    );
  }
}

function Department() {
  const isLoading = useSelector((state) => state.departments.isLoading);
  const errMess = useSelector((state) => state.departments.errMess);
  const dataDepartments = useSelector((state) => state.departments.departments);

  const departments = dataDepartments.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
        <RenderDept
          department={department}
          isLoading={isLoading}
          errMess={errMess}
        />
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

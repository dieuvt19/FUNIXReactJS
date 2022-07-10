import React from "react";

import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RenderStaffItem({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} value={staff.name} />
        <p className="d-flex justify-content-center m-0">{staff.name}</p>
      </Link>
    </Card>
  );
}

function DepartmentDetail() {
  const dataStaffs = useSelector((state) => state.staffs.staffs);

  const dataDepartments = useSelector((state) => state.departments.departments);
  const { departmentId } = useParams();

  const deptStaffs = dataStaffs.filter(
    (staff) => staff.departmentId === String(departmentId)
  );
  console.log(deptStaffs);

  const nameDept = dataDepartments.filter(
    (dept) => dept.id === String(departmentId)
  )[0];
  console.log(nameDept);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/department">Phòng ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{nameDept && nameDept.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        {deptStaffs.map((staff) => {
          return (
            <div key={staff.id} className="col-6 col-md-4 col-lg-2">
              <div className="m-1">
                <RenderStaffItem staff={staff} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DepartmentDetail;

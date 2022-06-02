import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderStaff({ nv }) {
  if (nv != null) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <CardImg width="100%" src={nv.image} value={nv.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <CardTitle>Họ và tên: {nv.name}</CardTitle>
            <CardText>Ngày sinh: {dateFormat(nv.doB, "dd/mm/yyyy")}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {nv.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {nv.annualleave}</CardText>
            <CardText>Số ngày đã làm thêm: {nv.overTime}</CardText>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default function StaffDetail(props) {
  console.log(props);
  if (props.nv != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.nv.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row mb-3">
          <RenderStaff nv={props.nv} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

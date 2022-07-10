import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { updateStaff } from "../redux/ActionCreators";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function UpdateStaff() {
  const dispatch = useDispatch();
  const { staffId } = useParams();
  let navigate = useNavigate();
  console.log(staffId);
  const dataStaffs = useSelector((state) => state.staffs.staffs);
  console.log(dataStaffs);
  const infoStaffUpdate = dataStaffs.filter(
    (staff) => dataStaffs && staff.id === parseInt(staffId)
  )[0];
  console.log(infoStaffUpdate);

  const handleSubmitUpdate = (value) => {
    const staffUpdate = {
      id: parseInt(staffId),
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      departmentId: value.departmentId,
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };

    dispatch(updateStaff(staffUpdate));
    navigate(`/staff/${staffUpdate.id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {infoStaffUpdate && infoStaffUpdate.name}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <hr />
      <div className="row">
        <LocalForm onSubmit={(value) => handleSubmitUpdate(value)}>
          <Row className="control-group pb-3">
            <Label htmlFor="name" md={4}>
              Tên
            </Label>
            <Col md={8}>
              <Control.text
                model=".name"
                className="form-control"
                id="name"
                name="name"
                defaultValue={infoStaffUpdate && infoStaffUpdate.name}
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(30),
                }}
              />
              <Errors
                model=".name"
                className="text-danger"
                show="touched"
                messages={{
                  required: "Yêu cầu nhập",
                  minLength: "Tên nên nhiều hơn 2 ký tự",
                  maxLength: "Tên nên ít hơn 30 ký tự",
                }}
              />
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="doB" md={4}>
              Ngày sinh
            </Label>
            <Col md={8}>
              <Control
                type="date"
                model=".doB"
                id="doB"
                name="doB"
                className="form-control"
                defaultValue={infoStaffUpdate && infoStaffUpdate.doB}
                validators={{
                  required,
                }}
              />
              <Errors
                model=".doB"
                className="text-danger"
                show="touched"
                messages={{
                  required: "Yêu cầu nhập",
                }}
              />
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="startDate" md={4}>
              Ngày vào công ty
            </Label>
            <Col md={8}>
              <Control
                type="date"
                model=".startDate"
                id="startDate"
                name="startDate"
                defaultValue={infoStaffUpdate && infoStaffUpdate.startDate}
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                model=".startDate"
                className="text-danger"
                show="touched"
                messages={{
                  required: "Yêu cầu nhập",
                }}
              />
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="department" md={4}>
              Phòng ban
            </Label>
            <Col md={8}>
              <Control.select
                model=".departmentId"
                id="departmentId"
                name="departmentId"
                className="form-control"
                defaultValue={infoStaffUpdate && infoStaffUpdate.departmentId}
              >
                <option value="Dept01">Sale</option>
                <option value="Dept02">HR</option>
                <option value="Dept03">Marketing</option>
                <option value="Dept04">IT</option>
                <option value="Dept05">Finance</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="salaryScale" md={4}>
              Hệ số lương
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".salaryScale"
                id="salaryScale"
                name="salaryScale"
                className="form-control"
                defaultValue={infoStaffUpdate && infoStaffUpdate.salaryScale}
              />
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="annualLeave" md={4}>
              Số ngày nghỉ còn lại
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".annualLeave"
                id="annualLeave"
                name="annualLeave"
                className="form-control"
                defaultValue={infoStaffUpdate && infoStaffUpdate.annualLeave}
              />
            </Col>
          </Row>
          <Row className="control-group pb-3">
            <Label htmlFor="overTime" md={4}>
              Số ngày đã làm thêm
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".overTime"
                id="overTime"
                name="overTime"
                className="form-control"
                defaultValue={infoStaffUpdate && infoStaffUpdate.overTime}
              />
            </Col>
          </Row>

          <Button className="btn btn-warning mb-2" type="submit">
            Update
          </Button>
        </LocalForm>
      </div>
    </div>
  );
}

export default UpdateStaff;

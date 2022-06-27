import React, { useState } from "react";
import {
  Card,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(Number(val));

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

const StaffList = (props) => {
  console.log(props);
  const [staffs, setStaffs] = useState(props.staffs);
  const [keyword, setKeyword] = useState("");

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  // Get value from search input
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword === "") {
      alert("Vui lòng nhập tên nhân viên cần tìm!");
      return false;
    } else {
      const resultSearch = props.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setStaffs(resultSearch);
    }
  };

  const handleSubmit = (values) => {
    toggle();
    props.addStaff(
      values.name,
      values.doB,
      values.startDate,
      values.department,
      values.salaryScale,
      values.annualLeave,
      values.overTime
    );
    console.log(props.staffs);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mt-1">
          <div className="row">
            <div className="col-10 col-md-10">
              <h3>Nhân Viên</h3>
            </div>
            <div className="col-2 col-md-2">
              <Button onClick={toggle}>
                <span className="fa fa-plus"></span>
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Thêm Nhân Viên</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(value) => handleSubmit(value)}>
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
                          model=".department"
                          id="department"
                          name="department"
                          className="form-control"
                          defaultValue="Sale"
                        >
                          <option value="Sale">Sale</option>
                          <option value="HR">HR</option>
                          <option value="Marketing">Marketing</option>
                          <option value="IT">IT</option>
                          <option value="Finance">Finance</option>
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
                          defaultValue={1}
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
                          defaultValue={0}
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
                          defaultValue={0}
                        />
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Thêm
                    </Button>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form className="form-group row" onSubmit={handleSearch}>
            <div className="col-8 col-md-8 pt-2">
              <Input
                type="text"
                placeholder="Tên nhân viên"
                value={keyword}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-4 col-md-4 mt-1">
              <button className="btn btn-primary" type="submit">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        {staffs.map((staff) => {
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
};

export default StaffList;

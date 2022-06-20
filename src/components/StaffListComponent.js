import React, { useState } from "react";
import {
  Card,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} value={staff.name} />
        <p className="d-flex justify-content-center m-0">{staff.name}</p>
      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  const [staffs, setStaffs] = useState(props.staffs);
  console.log(staffs);
  const [keyword, setKeyword] = useState("");
  const [name, setName] = useState("");
  const [doB, setDoB] = useState("");
  const [salaryScale, setSalaryScale] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sale");
  const [annualLeave, setAnnualLeave] = useState(0);
  const [overTime, setOverTime] = useState(0);
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");

  // const newStaff1 = {
  //   name: name,
  //   doB: doB,
  //   salaryScale: salaryScale,
  //   startDate: startDate,
  //   department: department,
  //   annualLeave: annualLeave,
  //   overTime: overTime,
  //   salary: salary,
  //   image: "../public/assets/images/alberto.png",
  // };
  // console.log(newStaff1);

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = {
      id: staffs.length,
      name,
      doB,
      salaryScale,
      startDate,
      department,
      annualLeave,
      overTime,
      image: "/assets/images/alberto.png",
    };
    setStaffs([...staffs, newStaff]);
  };

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mt-3">
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
                  <Form onSubmit={handleSubmit}>
                    <Row className="control-group">
                      <Label htmlFor="name" md={4}>
                        Tên
                      </Label>
                      <Col md={8}>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          className="form-control"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="doB" md={4}>
                        Ngày sinh
                      </Label>
                      <Col md={8}>
                        <Input
                          type="date"
                          id="doB"
                          name="doB"
                          className="form-control"
                          onChange={(e) => {
                            setDoB(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="startDate" md={4}>
                        Ngày vào công ty
                      </Label>
                      <Col md={8}>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          className="form-control"
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="department" md={4}>
                        Phòng ban
                      </Label>
                      <Col md={8}>
                        <Input
                          type="select"
                          id="department"
                          name="department"
                          value={department}
                          className="form-control"
                          onChange={(e) => {
                            setDepartment(e.target.value);
                          }}
                        >
                          <option value="sale">Sale</option>
                          <option value="HR">HR</option>
                          <option value="marketing">Marketing</option>
                          <option value="it">IT</option>
                          <option value="finance">Finance</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="salaryScale" md={4}>
                        Hệ số lương
                      </Label>
                      <Col md={8}>
                        <Input
                          type="number"
                          id="salaryScale"
                          name="salaryScale"
                          value={1}
                          className="form-control"
                          onChange={(e) => {
                            setSalaryScale(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="annualLeave" md={4}>
                        Số ngày nghỉ còn lại
                      </Label>
                      <Col md={8}>
                        <Input
                          type="number"
                          id="annualLeave"
                          name="annualLeave"
                          value={annualLeave}
                          className="form-control"
                          onChange={(e) => {
                            setAnnualLeave(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group">
                      <Label htmlFor="overTime" md={4}>
                        Số ngày đã làm thêm
                      </Label>
                      <Col md={8}>
                        <Input
                          type="number"
                          id="overTime"
                          name="overTime"
                          value={overTime}
                          className="form-control"
                          onChange={(e) => {
                            setOverTime(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Button color="primary" onClick={toggle} type="submit">
                      Thêm
                    </Button>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <form className="form-group row" onSubmit={handleSearch}>
            <div className="col-8 col-md-8 pt-2">
              <input
                type="text"
                placeholder="Tên nhân viên"
                value={keyword}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-4 col-md-4 p-1">
              <button className="btn btn-primary" type="submit" value="Submit">
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

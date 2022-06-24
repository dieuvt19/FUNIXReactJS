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
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

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
  const [keyword, setKeyword] = useState("");
  const [name, setName] = useState("");
  const [doB, setDoB] = useState("");
  const [salaryScale, setSalaryScale] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sale");
  const [annualLeave, setAnnualLeave] = useState(0);
  const [overTime, setOverTime] = useState(0);
  const [touched, setTouched] = useState({
    name: false,
    doB: false,
    startDate: false,
    department: false,
    salaryScale: false,
    annualLeave: false,
    overTime: false,
  });
  const [errorsMsg, setErrorsMsg] = useState({});
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

  // validator function

  const handleBlur = (field) => (evt) => {
    setTouched({ ...touched, [field]: true });
  };

  function validate(
    name,
    doB,
    startDate,
    department,
    salaryScale,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };

    if (touched.name && name.length < 1) errors.name = "Yêu cầu nhập";
    else if (touched.name && name.length < 3)
      errors.name = "Tên nên nhiều hơn 2 ký tự";
    else if (touched.name && name.length > 30)
      errors.name = "Tên nên dưới 30 ký tự";

    if (touched.doB && doB.length < 1) errors.doB = "Yêu cầu nhập";

    if (touched.startDate && startDate.length < 1)
      errors.startDate = "Yêu cầu nhập";

    return errors;
  }

  const errors = validate(
    name,
    doB,
    startDate,
    department,
    salaryScale,
    annualLeave,
    overTime
  );

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
    if (
      newStaff.name === "" &&
      newStaff.doB === "" &&
      newStaff.startDate === ""
    ) {
      setErrorsMsg({
        ...errorsMsg,
        name: "Yêu cầu nhập",
        doB: "Yêu cầu nhập",
        startDate: "Yêu cầu nhập",
      });
      return false;
    }
    props.addStaff(newStaff);
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
                  <Form onSubmit={handleSubmit}>
                    <Row className="control-group pb-3">
                      <Label htmlFor="name" md={4}>
                        Tên
                      </Label>
                      <Col md={8}>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          value={name}
                          invalid={errors.name !== ""}
                          onBlur={handleBlur("name")}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <div className="danger">
                          {!touched.name ? errorsMsg.name : null}
                        </div>
                        <FormFeedback>{errors.name}</FormFeedback>
                      </Col>
                    </Row>
                    <Row className="control-group pb-3">
                      <Label htmlFor="doB" md={4}>
                        Ngày sinh
                      </Label>
                      <Col md={8}>
                        <Input
                          type="date"
                          id="doB"
                          name="doB"
                          className="form-control"
                          invalid={errors.doB !== ""}
                          onBlur={handleBlur("doB")}
                          onChange={(e) => {
                            setDoB(e.target.value);
                          }}
                        />
                        <div className="danger">
                          {!touched.doB ? errorsMsg.doB : null}
                        </div>
                        <FormFeedback>{errors.doB}</FormFeedback>
                      </Col>
                    </Row>
                    <Row className="control-group pb-3">
                      <Label htmlFor="startDate" md={4}>
                        Ngày vào công ty
                      </Label>
                      <Col md={8}>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={startDate}
                          className="form-control"
                          invalid={errors.startDate !== ""}
                          onBlur={handleBlur("startDate")}
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                        />
                        <div className="danger">
                          {!touched.startDate ? errorsMsg.startDate : null}
                        </div>

                        <FormFeedback>{errors.startDate}</FormFeedback>
                      </Col>
                    </Row>
                    <Row className="control-group pb-3">
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
                          <option value="Sale">Sale</option>
                          <option value="HR">HR</option>
                          <option value="Marketing">Marketing</option>
                          <option value="IT">IT</option>
                          <option value="Finance">Finance</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row className="control-group pb-3">
                      <Label htmlFor="salaryScale" md={4}>
                        Hệ số lương
                      </Label>
                      <Col md={8}>
                        <Input
                          type="number"
                          id="salaryScale"
                          name="salaryScale"
                          value={salaryScale}
                          className="form-control"
                          onChange={(e) => {
                            setSalaryScale(e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="control-group pb-3">
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
                    <Row className="control-group pb-3">
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
                    <Button color="primary" type="submit">
                      Thêm
                    </Button>
                  </Form>
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

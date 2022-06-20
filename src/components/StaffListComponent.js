import React, { useState } from "react";
import {
  Card,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
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
  const [keyword, setKeyword] = useState("");
  const [name, setName] = useState("");

  const newStaff = {
    name: name,
  };
  console.log(newStaff);

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

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
                  <Form>
                    <Row className="control-group">
                      <Label htmlFor="name" md={4}>
                        Tên
                      </Label>
                      <Col md={8}>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          onChange={onChangeName}
                        />
                      </Col>
                    </Row>
                    {/* <FormGroup>
                      <Label htmlFor="doB">Ngày sinh</Label>
                      <Input type="text" name="doB" id="doB" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="startDate">Ngày vào công ty</Label>
                      <Input type="text" name="startDate" id="startDate" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="department">Phòng ban</Label>
                      <Input type="text" name="department" id="department" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="salaryScale">Hệ số lương</Label>
                      <Input
                        type="number"
                        name="salaryScale"
                        id="salaryScale"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                      <Input
                        type="number"
                        name="annualLeave"
                        id="annualLeave"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="annualLeave">Số ngày đã làm thêm</Label>
                      <Input
                        type="number"
                        name="annualLeave"
                        id="annualLeave"
                      />
                    </FormGroup> */}
                    <Button color="primary" onClick={toggle}>
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

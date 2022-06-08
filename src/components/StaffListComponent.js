import React, { useState } from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import TypeDepartments from "./TypeDepartments";
import { STAFFS } from "../shared/staffs";

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} value={staff.name} />
        <p className="col d-flex justify-content-center m-0">{staff.name}</p>
      </Link>
    </Card>
  );
}

function RenderStaffSearch({ staff, onClick }) {
  return (
    <React.Fragment>
      {staff.map((item) => {
        const { id, name, image } = item;
        return (
          <Card>
            <Link to={`/nhanvien/${id}`}>
              <CardImg width="100%" src={image} value={name} />
              <p className="col d-flex justify-content-center m-0">{name}</p>
            </Link>
          </Card>
        );
      })}
    </React.Fragment>
  );
}

const StaffList = (props) => {
  console.log(props);

  const listStaff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2">
        <div className="m-1">
          <RenderStaffItem staff={staff} />
        </div>
      </div>
    );
  });

  const [valueSearch, setValueSearch] = useState("");
  const searchStaff = () => {
    if (valueSearch === "") {
      alert("Vui lòng nhập tên nhân viên cần tìm!");
    } else {
      const staffSearch = props.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(valueSearch.toLowerCase())
      );
      console.log(staffSearch);
      return (
        <div key={staffSearch.id} className="col-6 col-md-4 col-lg-2">
          <div className="m-1">
            <RenderStaffSearch staff={staffSearch} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="d-flex m-2">
        <h3 className="col-7">Nhân Viên</h3>
        <div className="col-5">
          <input
            type="text"
            placeholder="Tên nhân viên"
            onChange={(e) => setValueSearch(e.target.value)}
          />
          <button className="btn btn-primary btn-xs ml-2" onClick={searchStaff}>
            Tìm kiếm
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        {valueSearch === "" ? listStaff : searchStaff(valueSearch)}
      </div>
    </div>
  );
};

export default StaffList;

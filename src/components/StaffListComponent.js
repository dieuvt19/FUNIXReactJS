import React, { useState } from "react";
import { Card, CardImg } from "reactstrap";
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

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword === "") {
      alert("Vui lòng nhập tên nhân viên cần tìm!");
      return false;
    } else {
      const resultSearch = props.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
      setStaffs(resultSearch);
    }
  };

  return (
    <div className="container">
      <div className="d-flex m-2 row">
        <h3 className="col-7">Nhân Viên</h3>
        <div className="row">
          <input
            type="text"
            placeholder="Tên nhân viên"
            value={keyword}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary ml-2" onClick={handleSearch}>
            Tìm kiếm
          </button>
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

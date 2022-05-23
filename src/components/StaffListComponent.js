import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelectedStaff: null,
      columnDefault: "col-12 col-md-6 col-lg-4 mt-3",
    };
  }

  onStaffSelect(staff) {
    this.setState({
      onSelectedStaff: staff,
    });
  }

  onColumDefault(col) {
    this.setState({
      columnDefault: col,
    });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="col-12">
          <Card>
            <CardImg with="100%" src={staff.image} alt={staff.name} />
            <CardBody>
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
              <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
              <CardTitle>Họ và tên: {staff.overTime}</CardTitle>
              <button
                onClick={() => {
                  this.onStaffSelect(null);
                }}
              >
                Close
              </button>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.columnDefault} key={staff.id}>
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row m-3">
          <button
            onClick={() => this.onColumDefault("col-md-2 mt-1")}
            className="btn btn-success mt-3 mx-2"
          >
            6 cột
          </button>
          <button
            onClick={() => this.onColumDefault("col-md-3 mt-1")}
            className="btn btn-success mt-3 mx-2"
          >
            4 cột
          </button>
          <button
            onClick={() => this.onColumDefault("col-md-4 mt-1")}
            className="btn btn-success mt-3 mx-2"
          >
            3 cột
          </button>
          <button
            onClick={() => this.onColumDefault("col-md-6 mt-1")}
            className="btn btn-success mt-3 mx-2"
          >
            2 cột
          </button>
          <button
            onClick={() => this.onColumDefault("col-md-12 mt-1")}
            className="btn btn-success mt-3 mx-2"
          >
            1 cột
          </button>
        </div>
        <div className="row">{staffList}</div>
        <div className="row mt-5">
          {this.renderStaff(this.state.onSelectedStaff)}
        </div>
      </div>
    );
  }
}

export default StaffList;

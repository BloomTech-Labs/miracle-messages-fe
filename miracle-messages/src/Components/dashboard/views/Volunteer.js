import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

class Volunteer extends Component {
  render() {
    return (
      <Card>
        {/* {console.log(this.props.vol)} */}
        <CardBody>
          <CardTitle className="mb-0">
            <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            {`${this.props.vol.fname} ${this.props.vol.lname}`}
          </CardTitle>
        </CardBody>
        <CardBody className="border-top">
          <span style={{ marginRight: "30px" }}>{this.props.vol.email}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.phone}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.city}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.state}</span>
          <span style={{ marginRight: "20px" }}>{this.props.vol.country}</span>
          <Button
            color="danger"
            style={{ width: "100px", right: "60px", position: "absolute" }}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    );
  }
}
export default Volunteer;

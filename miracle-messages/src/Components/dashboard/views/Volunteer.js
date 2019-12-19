import React, { Component } from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import axios from "axios"

class Volunteer extends Component {
  deleteVolunteer = id => {
    axios
      .delete(`http://localhost:5000/api/form/${id}`)
      .then(response => console.log("Successfully Deleted"))
      .catch(error => console.log(error, "There is an error"))
  }
  render() {
    return (
      <Card style={{ maxWidth: "60%", minWidth: "650px" }}>
        <CardBody>
          <CardTitle className="mb-0">
            <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            {`${this.props.vol.fname} ${this.props.vol.lname}`}
          </CardTitle>
          <Button
            color="danger"
            style={{
              width: "85px",
              right: "28px",
              bottom: "73px",
              borderRadius: "20px",
              position: "absolute"
            }}
            onClick={() => this.deleteVolunteer(this.props.vol.id)}
          >
            Delete
          </Button>
        </CardBody>
        <CardBody className="border-top">
          <span style={{ marginRight: "30px" }}>{this.props.vol.email}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.phone}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.city}</span>

          <span style={{ marginRight: "30px" }}>{this.props.vol.state}</span>
          <span style={{ marginRight: "20px" }}>{this.props.vol.country}</span>
        </CardBody>
      </Card>
    )
  }
}
export default Volunteer

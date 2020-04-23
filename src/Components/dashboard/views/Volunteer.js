import React, { useState } from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useUserGroups } from '../../../utils/customHooks/useUserGroups';


const Volunteer = props =>  {
  const { admin, chapterLeaders, volunteer } = useUserGroups();


  const deleteVolunteer = id => {
    axiosWithAuth()
      .delete(`/api/volunteer/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error, "There is an error")
      })
  }


    return (
      <Card style={{ maxWidth: "60%", minWidth: "650px" }}>
        <CardBody>
          <CardTitle className="mb-0">
            <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            {`${props.vol.fname} ${props.vol.lname}`}
          </CardTitle>

          {/* Only for admins */}
          {admin && <Button
            color="danger"
            style={{
              width: "85px",
              right: "28px",
              bottom: "73px",
              borderRadius: "20px",
              position: "absolute"
            }}
            onClick={() => deleteVolunteer(props.vol.id)}
          >
            Delete
          </Button>}
        </CardBody>
        <CardBody className="border-top">
          <span style={{ marginRight: "30px" }}>{props.vol.email}</span>

          <span style={{ marginRight: "30px" }}>{props.vol.phone}</span>

          <span style={{ marginRight: "30px" }}>{props.vol.city}</span>

          <span style={{ marginRight: "30px" }}>{props.vol.state}</span>
          <span style={{ marginRight: "20px" }}>{props.vol.country}</span>
        </CardBody>
      </Card>
    )
}
export default Volunteer

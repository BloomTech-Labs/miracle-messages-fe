import React from "react"
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Volunteer from "./Volunteer"

class Volunteers extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/api/volunteer")
      .then(res => {
        // console.log(res)
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        {this.state.data.map((vol, key) => {
          return <Volunteer vol={vol} key={key} />
        })}
      </div>
    )
  }
}

export default Volunteers

import React from "react"
import axios from "axios"
import Volunteer from "./Volunteer"

class Volunteers extends React.Component {
  state = {
    data: []
  }

  //https://miracle-messages-production.herokuapp.com/api/form
  // http://localhost:5000/api/form
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/form")
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
          // console.log(vol)
          return <Volunteer vol={vol} key={key} />
        })}
      </div>
    )
  }
}

export default Volunteers

import React from "react"
import axios from "axios"
import Volunteer from "./Volunteer"

class Volunteers extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios
      .get("https://miracle-messages-dev.herokuapp.com/api/form")
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

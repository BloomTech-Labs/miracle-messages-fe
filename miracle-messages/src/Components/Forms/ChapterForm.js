import React from "react"
import axios from "axios"
import "./NewChapter.scss"

class ChapterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      chapter: {
        title: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: ""
      }
    }
  }

  addChapter = e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append("chapter_img", this.state.chapter.chapter_img)
    fd.append("title", this.state.chapter.title)
    fd.append("description", this.state.chapter.description)
    fd.append("city", this.state.chapter.city)
    fd.append("state", this.state.chapter.state)
    fd.append("latitude", this.state.chapter.latitude)
    fd.append("longitude", this.state.chapter.longitude)
    fd.append("email", this.state.chapter.email)

    axios
      .post("https://miracle-messages-dev.herokuapp.com/api/chapter", fd)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))

    this.setState({
      chapter: {
        title: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: ""
      }
    })
  }

  handleInputChange = event => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [event.target.name]: event.target.value
      }
    })
  }

  handleImg = event => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [event.target.name]: event.target.files[0]
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <strong className="main-bold">
            <h2>Create a Chapter Request</h2>
          </strong>

          <form className="chapter-form">
            <section className="input-wrapper">
              <div className="chapter-div">
                <div className="chapter-formBox">
                  <label className="label">Title of Chapter*</label>
                </div>

                <div className="chapter-formBox">
                  <input
                    className="input"
                    value={this.state.chapter.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Phoenix Fans"
                  />
                </div>

                <div className="chapter-formBox">
                  <label className="label">Contact Email*</label>
                </div>
                <div className="chapter-formBox">
                  <input
                    className="input"
                    value={this.state.chapter.email}
                    onChange={this.handleInputChange}
                    name="email"
                    type="email"
                    placeholder="Sample@gmail.com"
                  />
                </div>
              </div>

              <div className="chapter-div">
                <div className="chapter-formBox">
                  <label className="label">City*</label>
                </div>
                <div className="chapter-formBox">
                  <input
                    className="input"
                    value={this.state.chapter.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="Phoenix"
                  />
                </div>

                <div className="chapter-formBox">
                  <label className="label">State*</label>
                </div>
                <div className="chapter-formBox">
                  <input
                    className="input"
                    value={this.state.chapter.state}
                    onChange={this.handleInputChange}
                    name="state"
                    placeholder="AZ"
                  />
                </div>
              </div>
              <div className="chapter-div">
                <h6>
                  ***Please use
                  <a href="https://www.latlong.net/" target="_blank">
                    {" "}
                    this link{" "}
                  </a>{" "}
                  to get the desired latitude and longitude for your intended
                  chapter***
                </h6>
              </div>
              <div className="chapter-div2">
                <div>
                  <div className="chapter-formBox">
                    <label className="label">Latitude*</label>
                  </div>
                  <div className="chapter-formBox">
                    <input
                      className="input"
                      value={this.state.chapter.latitude}
                      onChange={this.handleInputChange}
                      name="latitude"
                      placeholder="33.448376"
                    />
                  </div>
                </div>

                <div>
                  <div className="chapter-formBox">
                    <label className="label">Longitude*</label>
                  </div>
                  <div className="chapter-formBox">
                    <input
                      className="input"
                      value={this.state.chapter.longitude}
                      onChange={this.handleInputChange}
                      name="longitude"
                      placeholder="-112.074036"
                    />
                  </div>
                </div>
              </div>
              <div className="chapter-div chapter-div-bottom">
                <div className="chapter-formBox">
                  <label className="labelV2">
                    Please upload an image to be used as the main page image for
                    this chapter.
                  </label>
                </div>
                <div className="chapter-formBox">
                  <input
                    className="image-input"
                    onChange={this.handleImg}
                    name="chapter_img"
                    type="file"
                  />
                </div>

                <div className="chapter-formBox">
                  <textarea
                    className="textarea"
                    value={this.state.chapter.description}
                    onChange={this.handleInputChange}
                    name="description"
                    type="text"
                    placeholder="Everybody has a story to tell, and we would love to hear yours!"
                    rows="5"
                  />
                </div>
              </div>
              <button
                className="submitb"
                style={{
                  height: "50px",
                  width: "315px",
                  backgroundColor: "#5cbe80",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  color: "#ffffff",
                  letterSpacing: "0.9px",
                  textAlign: "center",
                  margin: "0rem auto",
                  paddingBottom: "30px"
                }}
                color="success"
                onClick={this.addChapter}
              >
                Submit Chapter Request
              </button>
            </section>
          </form>
        </div>
      </div>
    )
  }
}

export default ChapterForm

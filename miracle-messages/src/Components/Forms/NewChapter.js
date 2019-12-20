import React from "react"
import axios from "axios"
import "./NewChapter.scss"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"
import ChapterInfo from "./ChapterInfo"
import ChapterForm from "../dashboard/views/Chapters/ChapterForm"

class NewChapter extends React.Component {
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
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

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

  handleInputChange = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.value
      }
    })
  }

  handleImg = e => {
    this.setState({
      chapter: {
        ...this.state.chapter,
        [e.target.name]: e.target.files[0]
      }
    })
  }

  render() {
    return (
      <div className="container">
        <FormHeader />
        <div>
          <ChapterInfo />

          <ChapterForm
            change={this.handleInputChange}
            chapter={this.state.chapter}
            handleImg={this.handleImg}
            addChapter={this.addChapter}
          />
        </div>
        <FormFooter />
      </div>
    )
  }
}

export default NewChapter

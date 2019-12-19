import React from "react"
import axios from "axios"
import "./VolunteerForm.scss"
import ChapterForm from "../dashboard/views/Chapters/ChapterForm"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"

class NewChapterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      chapter: {
        title: "",
        established_date: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: "",
        numvolunteers: "",
        msg_delivered: "",
        msg_recorded: "",
        numreunions: "",
        story: "",
        reunion_img: null
      }
    }
  }

  addChapter = e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append("chapter_img", this.state.chapter.chapter_img)
    fd.append("reunion_img", this.state.chapter.reunion_img)
    fd.append("title", this.state.chapter.title)
    fd.append("established_date", this.state.chapter.established_date)
    fd.append("description", this.state.chapter.description)
    fd.append("city", this.state.chapter.city)
    fd.append("state", this.state.chapter.state)
    fd.append("latitude", this.state.chapter.latitude)
    fd.append("longitude", this.state.chapter.longitude)
    fd.append("email", this.state.chapter.email)
    fd.append("numvolunteers", this.state.chapter.numvolunteers)
    fd.append("msg_delivered", this.state.chapter.msg_delivered)
    fd.append("msg_recorded", this.state.chapter.msg_recorded)
    fd.append("numreunions", this.state.chapter.numreunions)
    fd.append("story", this.state.chapter.story)

    axios
      .post("http://localhost:5000/api/chapter", fd)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

    this.setState({
      chapter: {
        title: "",
        established_date: "",
        description: "",
        chapter_img: null,
        city: "",
        state: "",
        latitude: "",
        longitude: "",
        email: "",
        numvolunteers: "",
        msg_delivered: "",
        msg_recorded: "",
        numreunions: "",
        story: "",
        reunion_img: null
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

export default NewChapterForm

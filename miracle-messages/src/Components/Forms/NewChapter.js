import React from "react"
import "./VolunteerForm.scss"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"
import ChapterInfo from "./ChapterInfo"

class NewChapter extends React.Component {
  render() {
    return (
      <div className="container">
        <FormHeader />
        <div>
          <ChapterInfo />
        </div>
        <FormFooter />
      </div>
    )
  }
}

export default NewChapter

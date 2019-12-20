import React from "react"
import axios from "axios"
import "./NewChapter.scss"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"
import ChapterInfo from "./ChapterInfo"
import ChapterForm from "../dashboard/views/Chapters/ChapterForm"

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

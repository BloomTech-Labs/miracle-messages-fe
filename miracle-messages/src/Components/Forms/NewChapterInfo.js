import React from "react"
import "./NewChapter.scss"
import { Link } from "react-router-dom"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"

const NewChapterInfo = () => {
  return (
    <div className="container">
      <FormHeader />
      <div>
        <div className="main">
          <div className="main-bold">
            <h2>Chapter Information</h2>
          </div>
          <div>
            <h3 className="title">WHAT IS A CHAPTER?</h3>
            <p className="paragraph">
              A Chapter refers to a regional area like a city, state or other
              area. If no Chapter already exists in your city, you can create
              one.
            </p>
          </div>
          <div>
            <h3 className="title">WHY ARE CHAPTERS IMPORTANT?</h3>
            <p className="paragraph">
              Chapters serve as that central point where people in the same area
              connect, find support, work with other volunteers and more.
            </p>
          </div>
          <div>
            <h3 className="title">
              WHAT DO I NEED TO DO AS PART OF A CHAPTER?
            </h3>
            <p className="paragraph">
              Starting a Chapter or joining a Chapter is an important first step
              toward supporting your community. You will also be asked to attend
              at least one monthly outreach event (i.e. visiting a shelter,
              record street messages, etc.). You will also be asked to attend
              <strong> WEEKLY</strong> Case Solving Community call which take
              place every Wednesday at 5:30 pm PST. Lastly, you will need to
              attend at least <strong>TWO</strong> Outreach Volunteer calls
              which take place on Thursdays at 5:30 pm PST.
            </p>
          </div>
          <div>
            <h3 className="title"> HOW DO I CREATE A CHAPTER?</h3>
            <p className="paragraph">
              If there isn't a Chapter already in your city, you can volunteer
              to create one using the "I Want To Create A Chapter" button below.
              You will need to review the training materials and sign a few
              documents including the Miracle Messages Volunteer Waiver and the
              Code Of Conduct requirements. Also, please make sure everyone who
              joins your Chapter reads, understands and agrees to these same
              commitments.
            </p>
          </div>
          <div>
            <h3 className="title">WHERE CAN I FIND MORE INFORMATION?</h3>
            <p className="paragraph">
              A list of Miracle Messsage meeting dates, events, office hours,
              trainings and more can be found{" "}
              <a href="https://miraclemessages.org/events">here</a>.
            </p>
          </div>
          <div>
            <h3 className="title"> WHAT IF I HAVE MORE QUESTIONS?</h3>
            <p className="paragraph">
              If you have questions or need additional support, please contact
              us at your earliest convenience{" "}
              <a href="hello@miraclemessages.com">here</a>.
            </p>

            <Link to="/user/newchapterform">
              <button className="submitb">I Want To Create A Chapter</button>
            </Link>
          </div>
        </div>
        <FormFooter />
      </div>
    </div>
  )
}

export default NewChapterInfo

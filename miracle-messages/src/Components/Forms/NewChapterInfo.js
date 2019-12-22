import React from "react"
import "./NewChapter.scss"
import { Link } from "react-router-dom"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"

// THIS IS A WORK IN PROGRESS... THIS IS NOT THE FINAL COPY. I AM WAITING FOR FEEDBACK FROM SOMEONE.
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
            <h3 className="title">What Is A Chapter?</h3>
            <p className="paragraph">
              A Chapter is our way of referencing the different hubs or cities
              that are available to join. You can create a new one if your city
              is missing. Getting connected in a chapter is a great way to find
              support, other volunteers, encouragment, help, and to let us know
              where you are volunteering so we can partner you with other
              volunteers.
            </p>
            <p className="paragraph">
              Some of the responsibilities that come with a chapter include a
              monthly outreach event (such as going to a shelter or the streets
              to record messages), at least one person from the chapter
              attending WEEKLY Case Solving Community calls, (These take place
              every Wednesday at 5:30 pm PT), and at least one person attends
              TWO sessions of the Outreach Volunteers calls (which take place
              Thursdays at 5:30 pm PT).
            </p>
          </div>
          <div>
            <h3 className="title">All Volunteers Need To Know... </h3>
            <p className="paragraph">
              If you are volunteering to CREATE a chapter, it is expected that
              you review the training materials, sign the Miracle Messages
              volunteer waiver and code of conduct, and make sure that everyone
              who joins the chapter you create understands these comitments.
              These resources can be found <a href="#">here</a>.
            </p>
            <p className="paragraph">
              A list of the Miracle Messages meeting dates, events, office
              hours, trainings, and other events and times can be found at
              <br />
              <a href="https://miraclemessages.org/events">
                https://miraclemessages.org/events
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="title">Who to contact</h3>
            <p className="paragraph">
              If you have any further questions, or would like more clarifying
              information before commiting to a new chapter, please do not
              hesistate to contact Kevin F. Adler, the Miracle Messages CEO and
              founder at hello@miraclemessages.com.
            </p>
            <Link to="/user/newchapterform">
              <button className="submitb">I want to create a chapter</button>
            </Link>
          </div>
        </div>
        <FormFooter />
      </div>
    </div>
  )
}

export default NewChapterInfo

import React from "react"
import "./FooterLinks.scss"

const FooterLinks = () => {
  return (
    <div className="footer-wrapper2">
      <div className="column">
        <h5>Home</h5>
        <a href="https://miraclemessages.org/">Home</a>
        <a href="localhost:3000/">Map</a>
      </div>

      <div className="column">
        <h5>About Us</h5>
        <a href="https://miraclemessages.org/who">What is MM</a>
        <a href="https://miraclemessages.org/backstory">Backstory</a>
        <a href="https://miraclemessages.org/team">Team</a>
        <a href="https://miraclemessages.org/interns">Intern With Us</a>
        <a href="https://miraclemessages.org/stories">Stories</a>
      </div>

      <div className="column">
        <h5>What are Chapters?</h5>
        <a href="https://miraclemessages.org/newchapter">Chapter Information</a>
        <a href="https://miraclemessages.org/newchapterform">
          Create a Chapter
        </a>
      </div>

      <div className="column">
        <h5>Reunion Service</h5>
        <a href="https://miraclemessages.org/partner">Partner With Us</a>
        <a href="https://miraclemessages.org/refer">Refer A Homeless Client</a>
        <a href="https://miraclemessages.org/findthem">Find Missing Relative</a>
        <a href="https://miraclemessages.org/findthem-database">
          Missing Relative Database
        </a>
        <a href="https://miraclemessages.org/events">Attend An Event</a>
        <a href="https://miraclemessages.org/coldcase">
          Case Solving Community
        </a>
        <a href="https://teespring.com/miracle-messages-t-shirt?pid=369&cid=6513">
          Order Our Shirt
        </a>
      </div>

      <div className="column">
        <h5>Volunteer</h5>
        <a href="https://miracle-message.netlify.com/form">
          Volunteer Registration
        </a>
        <a href="https://miracle-message.netlify.com/user/login">
          Volunteer Login
        </a>
        <a href="https://miracle-message.netlify.com/admin/login">
          Admin Login
        </a>
      </div>

      <div className="column">
        <h5>Contact Us</h5>
        <p>Kevin</p>
        <p>his email</p>
      </div>
    </div>
  )
}

export default FooterLinks

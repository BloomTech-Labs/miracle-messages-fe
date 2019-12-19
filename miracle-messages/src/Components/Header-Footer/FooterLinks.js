import React from "react"
import "./FooterLinks.scss"

const FooterLinks = () => {
  return (
    <div className="footer-wrapper2">
      <a href="https://miraclemessages.org/">HOME</a>
      <div>
        <h5>About Us</h5>
        <a href="https://miraclemessages.org/who">What is MM</a>
        <a href="https://miraclemessages.org/backstory">Backstory</a>
        <a href="https://miraclemessages.org/team">Team</a>
        <a href="https://miraclemessages.org/interns">Intern With Us</a>
        <a href="https://miraclemessages.org/stories">Stories</a>
      </div>
      <div>
        <h5>What are Chapters?</h5>
        <a href="https://miraclemessages.org/newchapter">Chapter Information</a>
      </div>
      <div>
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
      <div>
        <h5>Volunteer</h5>
        <a href="http://localhost:3000/form">Volunteer Registration</a>
        <a href="http://localhost:3000/user/login">Volunteer Login</a>
        <a href="http://localhost:3000/admin/login">Admin Login</a>
      </div>
      <div>
        <h5>Contact Us</h5>
      </div>
      <div>
        <a href="https://www.classy.org/give/231839/#!/donation/checkout">
          DONATE
        </a>
      </div>
    </div>
  )
}

export default FooterLinks

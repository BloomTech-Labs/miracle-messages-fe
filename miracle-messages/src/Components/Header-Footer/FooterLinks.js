import React from "react"
import "./FooterLinks.scss"

const FooterLinks = () => {
  return (
    <div className="footer-wrapper2">
      <div>
        <h5>Home</h5>
        <a href="https://miraclemessages.org/">Home</a>
      </div>
      <div>
        <a href="localhost:3000/">Map</a>
      </div>

      <h5>About Us</h5>
      <div>
        <a href="https://miraclemessages.org/who">What is MM</a>
      </div>
      <div>
        <a href="https://miraclemessages.org/backstory">Backstory</a>
      </div>
      <div>
        <a href="https://miraclemessages.org/team">Team</a>
      </div>

      <div>
        <a href="https://miraclemessages.org/interns">Intern With Us</a>
      </div>
      <div>
        <a href="https://miraclemessages.org/stories">Stories</a>
      </div>

      <div>
        <h5>What are Chapters?</h5>
        <div>
          <a href="https://miraclemessages.org/newchapter">
            Chapter Information
          </a>
        </div>
      </div>
      <div>
        <h5>Reunion Service</h5>
        <div>
          <a href="https://miraclemessages.org/partner">Partner With Us</a>
        </div>
        <div>
          <a href="https://miraclemessages.org/refer">
            Refer A Homeless Client
          </a>
        </div>
        <div>
          <a href="https://miraclemessages.org/findthem">
            Find Missing Relative
          </a>
        </div>
        <div>
          <a href="https://miraclemessages.org/findthem-database">
            Missing Relative Database
          </a>
        </div>
        <div>
          <a href="https://miraclemessages.org/events">Attend An Event</a>
        </div>
        <div>
          <a href="https://miraclemessages.org/coldcase">
            Case Solving Community
          </a>
        </div>
        <div>
          <a href="https://teespring.com/miracle-messages-t-shirt?pid=369&cid=6513">
            Order Our Shirt
          </a>
        </div>
      </div>
      <div>
        <h5>Volunteer</h5>
        <div>
          <a href="http://localhost:3000/form">Volunteer Registration</a>
        </div>
        <div>
          <a href="http://localhost:3000/user/login">Volunteer Login</a>
        </div>
        <div>
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
    </div>
  )
}

export default FooterLinks

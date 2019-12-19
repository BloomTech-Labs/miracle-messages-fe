import React from "react"
import "./FooterLinks.scss"

const FooterLinks = () => {
  return (
    <div className="footer-wrapper2">
      <a href="https://miraclemessages.org/">HOME</a>
      <div>
        <h5>About Us</h5>
        <a href="https://miraclemessages.org/who">ABOUT</a>
      </div>
      <div>
        <h5>What are Chapters?</h5>
        <a href="https://miraclemessages.org/partner">REUNION SERVICE</a>
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

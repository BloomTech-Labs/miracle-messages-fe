import React from "react"
import logo from "../../Assets/Imgs/MM_Logo.png"
import "./Navbar.scss"

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-map">
        <a href="https://miraclemessages.org/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <a href="https://miraclemessages.org/">HOME</a>
          <a href="https://miraclemessages.org/who">ABOUT</a>
          <a href="https://miraclemessages.org/partner">REUNION SERVICE</a>
          <a href="#chapters"> Search </a>

          <div className="dropdown">
            <a className="dropbtn">GET INVOLVED</a>
            <div className="dropdown-content">
              <a href="http://localhost:3000/form">Volunteer Registration</a>
              <a href="http://localhost:3000/user/login">Volunteer Login</a>
              <a href="http://localhost:3000/admin/login">Admin Login</a>
              <a className="not-last-child">test</a>
            </div>
          </div>

          <a href="https://www.classy.org/give/231839/#!/donation/checkout">
            DONATE
          </a>
        </nav>
      </div>
    )
  }
}

export default Navbar

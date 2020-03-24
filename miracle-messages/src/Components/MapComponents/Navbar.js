import React from "react"
import { Link } from 'react-router-dom'
import logo from "../../Assets/Imgs/MM_Logo.png"
import "./Navbar.scss"

// search bar component
import SearchBar from "../MapComponents/SearchBar.js"

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-map">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <div className="search-bar">
            <div className="dropdown-search">
              <SearchBar />
            </div>
          </div>
          <div style={{ margin: "15px" }}> </div>
          <Link to="https://miraclemessages.org/">HOME</Link>
          <Link to="https://miraclemessages.org/who">ABOUT</Link>
          <Link to="https://miraclemessages.org/partner">REUNION SERVICE</Link>

          <div className="dropdown">
            <Link className="dropbtn">GET INVOLVED</Link>
            <div className="dropdown-content">
              <Link to="/form">
                Volunteer Registration
              </Link>
              <Link to="/user/login">
                Volunteer Login
              </Link>
              <Link to="/admin/login">
                Admin Login
              </Link>
              <Link className="not-last-child">test</Link>
            </div>
          </div>

          <Link to="https://www.classy.org/give/231839/#!/donation/checkout">
            DONATE
          </Link>
        </nav>
      </div>
    )
  }
}

export default Navbar

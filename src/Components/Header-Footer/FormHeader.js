import React from "react"
import logo from "../../Assets/Imgs/MM_Logo.png"
import { Link } from 'react-router-dom';
import "../MapComponents/Navbar.scss"
import "../Header-Footer/FormHeader.scss"
/*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************In order for this to work, you need to render inside of the <div className="container"> div of the component you want it to render in.
 ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
const FormHeader = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logonavbar">
          <img src={logo} alt="logo" />
        </div>
        <div className="tabsnavbar">
          <nav>
                <Link
                    className="atag"
                    to="/"
                  >
                    Home
                  </Link>
            <a
              href="https://miraclemessages.org/who"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>ABOUT</div>
            </a>
            <a
              href="https://miraclemessages.org/partner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>REUNION SERVICE</div>
            </a>
            <a>
              <div className="dropdown">
                <a className="dropbtn">GET INVOLVED </a>
                <div className="dropdown-content">
                  <Link
                    className="atag"
                    to="/form"
                  >
                    Volunteer Registration
                  </Link>
                  <Link
                    className="atag"
                    to="/user/login"
                  >
                    Volunteer Login
                  </Link>
                  <Link
                    className="atag"
                    to="/user/newchapter"
                  >
                    Create a Chapter
                  </Link>
                  <Link
                    className="atag"
                    to="/admin"
                  >
                    Admin Dashboard
                  </Link>
                  <a className="not-last-child">test</a>
                </div>
              </div>
            </a>

            <a
              href="https://www.classy.org/give/231839/#!/donation/checkout"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>DONATE</div>
            </a>
          </nav>
        </div>
      </div>
      <h1>Want to be apart of the Miracle Messages Community?</h1>
      {/* the below  3 divs are for the header image styling */}
      <div className="overlay">
        <div className="backImg">
          <div className="filter" />
        </div>
      </div>
    </header>
  )
}

export default FormHeader

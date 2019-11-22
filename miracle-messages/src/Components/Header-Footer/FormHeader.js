import React from "react"
import logo from "../../Assets/Imgs/MM_Logo.png"

// in order for this to work, you need to render inside of the <div className="container"> div of the component you want it to render in.
const FormHeader = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logonavbar">
          <img src={logo} alt="logo" />
        </div>
        <div className="tabsnavbar">
          <nav>
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
            <a href="localhost:3000/form">
              <div>GET INVOLVED</div>
              {/* this anchor tag should have a drop down to the register page, login form, forgot password page */}
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

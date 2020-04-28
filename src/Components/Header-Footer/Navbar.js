import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/MM_Logo.png";
import { connect } from "react-redux";
import "./Navbar.scss";

const Navbar = props => {

  return (
    <div className="navbar-map">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <div style={{ margin: "15px" }}> </div>
        <Link to="/">HOME</Link>
        <a target='_blank' href="https://miraclemessages.org/who">ABOUT</a>
        <a target='_blank' href="https://miraclemessages.org/partner">REUNION SERVICE</a>

        <div className="dropdown">
          <Link className="dropbtn">GET INVOLVED</Link>
          <div className="dropdown-content">
            <Link to="/user/login">Volunteer Login</Link>
            <Link to="/user/register">Volunteer Register</Link>
            <Link to="/admin">Admin Dashboard</Link>
            <Link className="not-last-child">test</Link>
          </div>
        </div>

        <a target='_blank' href="https://www.classy.org/give/231839/#!/donation/checkout">
          DONATE
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

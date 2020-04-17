import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/MM_Logo.png";
import { connect } from "react-redux";
import "./Navbar.scss";
import { updateChapters } from "../../Actions/SearchBarAction";

// search bar component
// import SearchBar from "../MapComponents/SearchBar.js";
import axios from "axios";

const Navbar = props => {
  const [search, updateSearch] = useState("");
  const [chapters, updateChapters] = useState([]);


  
    useEffect(() => {
      axios
        .get("https://miracle-messages-dev.herokuapp.com/api/chapter", chapters)
        .then(res => {
          updateChapters(res.data);
        })
        .catch(err => {
          console.log("search", err);
        });
    }, []);
  
    const handleChange = e => {
      updateSearch(e.target.value);
    };
  
    useEffect(() => {
          props.updateChapters(chapters.filter(chapter =>
            chapter.city.toLowerCase().includes(search.toLowerCase())))
      },[search])


  return (
    <div className="navbar-map">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <div className='search-box'>
          
          <div className="search-bar">
            <form>
            <i className='fas fa-search' />&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Search Chapters"
                value={search}
                onChange={handleChange}
                //style=()
                className="input"
              />
            </form>
          </div>
        </div>
        <div style={{ margin: "15px" }}> </div>
        <Link to="/">HOME</Link>
        <a target='_blank' href="https://miraclemessages.org/who">ABOUT</a>
        <a target='_blank' href="https://miraclemessages.org/partner">REUNION SERVICE</a>

        <div className="dropdown">
          <Link className="dropbtn">GET INVOLVED</Link>
          <div className="dropdown-content">
            <Link to="/form">Volunteer Registration</Link>
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

const mapStateToProps = state => {
  return {
    chapterData: state.mapReducer.chapterData
  };
};
export default connect(mapStateToProps, { updateChapters })(Navbar);

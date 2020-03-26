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
    props.updateChapters(filterFunction);
    if (search === "") {
      props.updateChapters(chapters);
    }
  };
  const filterFunction = chapters.filter(chapter =>
    chapter.city.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="navbar-map">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <div className="search-bar">
          <form>
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
        <div style={{ margin: "15px" }}> </div>
        <Link to="https://miraclemessages.org/">HOME</Link>
        <Link to="https://miraclemessages.org/who">ABOUT</Link>
        <Link to="https://miraclemessages.org/partner">REUNION SERVICE</Link>

        <div className="dropdown">
          <Link className="dropbtn">GET INVOLVED</Link>
          <div className="dropdown-content">
            <Link to="/form">Volunteer Registration</Link>
            <Link to="/user/login">Volunteer Login</Link>
            <Link to="/admin/login">Admin Login</Link>
            <Link className="not-last-child">test</Link>
          </div>
        </div>

        <Link to="https://www.classy.org/give/231839/#!/donation/checkout">
          DONATE
        </Link>
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import { updateChapters } from "../../Actions/SearchBarAction";
import axios from "axios";


const Navbar = (props) => {
    const [search, updateSearch] = useState("");
    const [chapters, updateChapters] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://miracle-messages-dev.herokuapp.com/api/chapter", chapters)
        .then((res) => {
          updateChapters(res.data);
        })
        .catch((err) => {
          console.log("search", err);
        });
    }, []);
  
    const handleChange = (e) => {
      updateSearch(e.target.value);
    };
  
    useEffect(() => {
      props.updateChapters(
        chapters.filter((chapter) =>
          chapter.city.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search]);

    return (
        <div className="search-box">
        <div className="search-bar">
          <form>
            <i className="fas fa-search" />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Search Chapters"
              value={search}
              onChange={handleChange}
              className="input"
            />
          </form>
        </div>
      </div>
    )
};

const mapStateToProps = (state) => {
    return {
      chapterData: state.mapReducer.chapterData,
    };
  };
  export default connect(mapStateToProps, { updateChapters })(Navbar);
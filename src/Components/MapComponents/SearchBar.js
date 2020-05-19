import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import { updateChapters } from "../../Actions/SearchBarAction";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import axios from "axios";


const Navbar = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const toggleSearch = e => {
    e.preventDefault();
    if (!searchOpen) {
      setSearchOpen(!searchOpen);
    }
  }

  const handleClick = e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }

  const handleClose = e => {
    setAnchorEl(null);
  };

  useEffect(() => {
    props.updateChapters(
      chapters.filter((chapter) =>
        chapter.city.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);


  return (
      <div 
      className={searchOpen ? "search-box" : "search-box closed"}
      onClick={toggleSearch}>
      <div className="search-bar">
        <form>
          <i className="fas fa-search" />
          <div>
            <input
              type="text"
              placeholder="Search Chapters"
              value={search}
              onChange={handleChange}
              onClick={e => e.stopPropagation()}
              className="input"
            />
            <IconButton 
              aria-controls="simple-menu" 
              aria-haspopup="true"
              keepMounted
              onClick={handleClick}
              onClose={handleClose}>
              <MoreVertIcon />
            </IconButton>
            <IconButton 
              aria-controls="simple-menu" 
              aria-haspopup="true"
              keepMounted
              onClick={() => setSearchOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
            <Menu
            id="simple-menu"
            className="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ top: "60px" }}
            >
              <MenuItem onClick={handleClose}>All</MenuItem>
              <MenuItem onClick={handleClose}>City</MenuItem>
              <MenuItem onClick={handleClose}>State</MenuItem>
            </Menu>
          </div>
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
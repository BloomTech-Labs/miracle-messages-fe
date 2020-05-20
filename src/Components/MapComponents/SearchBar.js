import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import { updateChapters } from "../../Actions/SearchBarAction";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import axios from "axios";


const SearchBar = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterAnchorEl, setFilterAnchor] = useState(null);
  const [search, updateSearch] = useState("");

  const toggleSearch = e => {
    e.preventDefault();
    if (!searchOpen) {
      setSearchOpen(!searchOpen);
    }
  }


  return (
      <div 
      className={searchOpen ? "search-box" : "search-box closed"}
      onClick={toggleSearch}>
      <div className="search-bar">
        <form>
          <i className="fas fa-search" />
          <div>
            <Autocomplete 
            id="search-menu"
            className="search-menu"
            options={props.chapters}
            getOptionLabel={chapter => chapter.city}
            onChange={(event, chapter) => {
              if (chapter) props.PinClickHandler(chapter);
            }}
            renderInput={(params) => <TextField {...params} id="standard-basic" variant="outlined" placeholder="Search Chapters"/>}
            />
            <IconButton 
              aria-controls="simple-menu" 
              aria-haspopup="true"
              keepMounted
              onClick={e => setFilterAnchor(e.currentTarget)}
              onClose={() => setFilterAnchor(false)}>
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
            id="filter-menu"
            className="filter-menu"
            anchorEl={filterAnchorEl}
            open={Boolean(filterAnchorEl)}
            onClose={() => setFilterAnchor(false)}
            style={{ top: "60px" }}
            >
              <MenuItem onClick={() => setFilterAnchor(false)}>All</MenuItem>
              <MenuItem onClick={() => setFilterAnchor(false)}>City</MenuItem>
              <MenuItem onClick={() => setFilterAnchor(false)}>State</MenuItem>
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
  export default connect(mapStateToProps, {})(SearchBar);
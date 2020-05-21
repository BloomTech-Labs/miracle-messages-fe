import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const SearchBar = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterAnchorEl, setFilterAnchor] = useState(null);
  const [mode, setMode] = useState("chapters");
  const [search, updateSearch] = useState("");

  const toggleSearch = e => {
    e.preventDefault();
    if (!searchOpen) {
      setSearchOpen(!searchOpen);
    }
  }

  const changeSearchData = mode => {
    setFilterAnchor(false);
    setMode(mode);
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
            options={mode === "chapters" ? props.chapters : props.reunions}
            getOptionLabel={chapter => chapter.city}
            onChange={(event, chapter) => {
              if (chapter && mode === "chapter") props.PinClickHandler(chapter);
            }}
            renderInput={(params) => <TextField {...params} id="standard-basic" variant="outlined" placeholder={mode === "chapters" ? "Search Chapters" : "Search Reunions"}/>}
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
              <MenuItem onClick={() => changeSearchData("chapters")}>Chapters</MenuItem>
              <MenuItem onClick={() => changeSearchData("reunions")}>Reunions</MenuItem>
            </Menu>
          </div>
        </form>
      </div>
    </div>
  )
};

export default SearchBar;
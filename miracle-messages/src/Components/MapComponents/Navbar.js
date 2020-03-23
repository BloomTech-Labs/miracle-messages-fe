import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { updateChapters } from '../../Actions/SearchBarAction';
import logo from "../../Assets/Imgs/MM_Logo.png";
import "./Navbar.scss";

// search bar component
// import SearchBar from "../MapComponents/SearchBar.js";
import axios from "axios";

const Navbar = props => {
    const [search, updateSearch] = useState('');
    
    const [chapters, updateChapters] = useState([]);
    
    useEffect(() => {
      axios.get("https://miracle-messages-dev.herokuapp.com/api/chapter", chapters)
      .then(res => {
        updateChapters(res.data);
      })
      .catch(err => {
        console.log('search', err);
      });
    }, [chapters]);

    const handleChange = e => {
      updateSearch(e.target.value);
      props.updateChapters(filterFunction);
      if (search === '') {
        props.updateChapters(chapters)
      }
    }
    const filterFunction = chapters.filter(chapter => 
      chapter.city.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="navbar-map">
        <a href="https://miraclemessages.org/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <div className="search-bar">
            <form>
              <input
                type='text'
                placeholder='Search Chapters'
                value={ search }
                onChange={ handleChange }
                //style=()
                className='input'
              />
            </form>
          </div>
          <div style={{ margin: "15px" }}> </div>
          <a href="https://miraclemessages.org/">HOME</a>
          <a href="https://miraclemessages.org/who">ABOUT</a>
          <a href="https://miraclemessages.org/partner">REUNION SERVICE</a>

          <div className="dropdown">
            <a className="dropbtn">GET INVOLVED</a>
            <div className="dropdown-content">
              <a href="https://https://miracle-messages.shelbydiamond.now.sh/form">
                Volunteer Registration
              </a>
              <a href="https://miracle-messages.shelbydiamond.now.sh/user/login">
                Volunteer Login
              </a>
              <a href="https://miracle-messages.shelbydiamond.now.sh/admin/login">
                Admin Login
              </a>
              <a className="not-last-child">test</a>
            </div>
          </div>

          <a href="https://www.classy.org/give/231839/#!/donation/checkout">
            DONATE
          </a>
        </nav>
      </div>
    )
};

const mapStateToProps = state => {
  return {
    chapterData: state.mapReducer.chapterData
  }
}
export default connect(mapStateToProps, { updateChapters })(Navbar);
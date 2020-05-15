import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/MM_Logo.png";
import { connect } from "react-redux";
import "./Navbar.scss";
import { updateChapters } from "../../Actions/SearchBarAction";

import SearchBar from "../MapComponents/SearchBar.js";
import axios from "axios";
import { useOktaAuth } from '@okta/okta-react';

import profilephoto from '../../Assets/Imgs/USER-PROF.png';

const Navbar = () => {
  return (
    <div className="navbar-map">
      <Link to="/">
        <img style={{
          paddingTop: '20px',
          paddingBottom: '10px',
          paddingLeft: '20px',
          width: '160px'
        }}
          src={logo} alt="logo" />
      </Link>
      <nav>
        <SearchBar />
        <div style={{ margin: "15px" }}> </div>
        
        <Link to="/">Dashboard</Link>

        {/* create registration/login navigation */}
        <Link to="/login">
          GET INVOLVED
        </Link>

        <Link to='/'>Map</Link>

        <a target='_blank' href="https://www.classy.org/give/231839/#!/donation/checkout" 
        style={{
          border: '1px solid white',
          padding: '10px 10px',
          backgroundColor: 'white',
          borderRadius: '10px',
          color: '#212121'
        }}>
          DONATE
        </a>
        <Link to='/' className='navProPic'
                  style={{
                    background: '#212121',
                  }}>
                  <img 
                    src={profilephoto}
                    alt='user'
                    className='rounded-circle'

                  />
                  </Link>

      </nav>
    </div>
  );
 };

export default Navbar;

import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

import SearchBar from "./SearchBar.js"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="https://miraclemessages.org/">
        HOME
      </a>
      <a className="menu-item" href="https://miraclemessages.org/who">
        ABOUT
      </a>
      <a className="menu-item" href="https://miraclemessages.org/partner">
        REUNION SERVICE
      </a>
      <a className="menu-item" href="http://localhost:3000/form">
        GET INVOLVED
      </a>
      <a
        className="menu-item"
        href="https://www.classy.org/give/231839/#!/donation/checkout"
      >
        DONATE
      </a>
      
      {/* <a className="menu-item" href="http://localhost:5000/api/chapter/">
        Search
      </a> */}


      <div className="burger-bar"> 
        <a className="burger-search"> Search </a>
        <div className="burger-dropdown"> 
          <SearchBar />
          </div> 
          </div>
    </Menu>
  );
};

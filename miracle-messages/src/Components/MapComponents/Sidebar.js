import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./Sidebar.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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
      <a
        className="menu-item"
        href="https://https://miracle-messages.shelbydiamond.now.sh/form"
      >
        GET INVOLVED
      </a>
      <a
        className="menu-item"
        href="https://https://miracle-messages.shelbydiamond.now.sh/form"
      >
        REGISTER AS A VOLUNTEER
      </a>
      <a
        className="menu-item"
        href="https://https://miracle-messages.shelbydiamond.now.sh/user/login"
      >
        VOLUNTEER LOGIN
      </a>
      <a
        className="menu-item"
        href="https://miracle-messages.shelbydiamond.now.sh/admin/login"
      >
        ADMIN LOGIN
      </a>
      <a
        className="menu-item"
        href="https://www.classy.org/give/231839/#!/donation/checkout"
      >
        DONATE
      </a>

      <Link to="/searchbar">Search</Link>
    </Menu>
  )
}

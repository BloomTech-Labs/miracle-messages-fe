import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./Sidebar.scss"
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
      <a className="menu-item" href="http://localhost:3000/form">
        REGISTER AS A VOLUNTEER
      </a>
      <a className="menu-item" href="http://localhost:3000/user/login">
        VOLUNTEER LOGIN
      </a>
      <a className="menu-item" href="http://localhost:3000/admin/login">
        ADMIN LOGIN
      </a>
      <a
        className="menu-item"
        href="https://www.classy.org/give/231839/#!/donation/checkout"
      >
        DONATE
      </a>
    </Menu>
  )
}

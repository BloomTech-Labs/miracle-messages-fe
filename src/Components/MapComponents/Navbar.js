import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/MM_Logo.png";
import logoMobile from "../../Assets/Imgs/MM_Logo_mobile.png";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import "./Navbar.scss";

import profilephoto from "../../Assets/Imgs/USER-PROF.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = (props) => {
  const token = JSON.parse(localStorage.getItem("okta-token-storage"));

  const history = useHistory();
  const { addToast } = useToasts();

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuStatus] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("okta-pkce-storage");
    localStorage.removeItem("okta-cache-storage");
    localStorage.removeItem("okta-token-storage");

    history.push("/");
    addToast("Logged Out", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: "2000",
    });
  };

  return (
    <div className={menuOpen ? "navbar-map open" : "navbar-map"}>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link to="/">
        {" "}
        <img className="mLogo" src={logoMobile} alt="mobile logo" />
      </Link>
      <nav>
        <a href="https://www.miraclemessages.org/why">why social supports?</a>
        <a href="https://www.miraclemessages.org/our-work">our work</a>

        <a href="https://www.miraclemessages.org/about">about us</a>

        <a
          className="donate"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.classy.org/give/231839/#!/donation/checkout"
        >
          donate
        </a>
        {!token && !props.isLoggedIn ? (
          <Link className="sign-in" to="/login">
            Sign In
          </Link>
        ) : null}
        {token && (
          <>
            <img
              src={profilephoto}
              alt="user"
              className="navProPic"
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  props.setSideBarOpen(!props.sideBarOpen);
                }}
              >
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogOut();
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </MenuItem>
            </Menu>
          </>
        )}
      </nav>
      <div className="close-chevron" onClick={() => setMenuStatus(!menuOpen)}>
        <i className="fas fa-chevron-up" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.loginReducer.isFetching,
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {})(Navbar);

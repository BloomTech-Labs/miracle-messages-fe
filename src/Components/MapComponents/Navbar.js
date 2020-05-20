import React, { useState } from "react";
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
    localStorage.removeItem("okToken");
    localStorage.removeItem("userId");
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
        {/* create registration/login navigation */}
        {!localStorage.userId || !props.isLoggedIn ? (
          <Link to="/login">Sign In</Link>
        ) : null}

        <a href="https://www.miraclemessages.org/about">About</a>

        <a
          className="donate"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.classy.org/give/231839/#!/donation/checkout"
        >
          Donate
        </a>
        {localStorage.userId && (
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
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Chapter" />
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

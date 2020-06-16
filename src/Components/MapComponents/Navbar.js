import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/MM_Logo.png";
import logoMobile from "../../Assets/Imgs/MM_Logo_mobile.png";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { registerUser } from "../../Actions/index";
import { logoutSuccess } from "../../Actions/AdminPageActions";

import "./Navbar.scss";

import profilephoto from "../../Assets/Imgs/USER-PROF.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useLoggedInUser } from "../../Hooks/useLoggedInUser";

const Navbar = (props) => {
  const user = useLoggedInUser();
  const token = JSON.parse(localStorage.getItem("okta-token-storage"));

  const history = useHistory();
  const { addToast } = useToasts();

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuStatus] = useState(false);
  const [opacity, setOpacity] = useState("#212121de");

  const changeOpacityOnScroll = () => {
    window.scrollY > 250 ? setOpacity("#212121de") : setOpacity("#21212100");
  };

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      if (location.pathname.includes("chapter")) {
        setOpacity("#21212100");
        document.addEventListener("scroll", changeOpacityOnScroll);
      } else if (!location.pathname.includes("chapter")) {
        setOpacity("#212121de");
        document.removeEventListener("scroll", changeOpacityOnScroll);
      }
    });
  }, [history]);

  useEffect(() => {
    token && props.registerUser(user);
    console.log("register user called");
    console.log(props.userImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoggedIn]);

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
    props.logoutSuccess();

    history.push("/");
    addToast("Logged Out", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: "2000",
    });
  };

  return (
    <div
      className={menuOpen ? "navbar-map open" : "navbar-map"}
      style={{ background: opacity }}
      position={{}}
    >
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
            {props.userImg && props.userImg.length > 0 ? (
              <img
                className="avatarPic"
                src={props.userImg}
                alt="user"
                onClick={handleClick}
              />
            ) : (
              <img
                src={profilephoto}
                alt="user"
                className="navProPic"
                onClick={handleClick}
              />
            )}

            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  //props.setSideBarOpen(!props.sideBarOpen);
                  history.push("/admin/dashboard");
                }}
              >
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/admin/pending");
                }}
              >
                <ListItemIcon>
                  <NotificationsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Requests" />
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
    userImg: state.loginReducer.userImg,
  };
};

export default connect(mapStateToProps, { registerUser, logoutSuccess })(
  Navbar
);

import React from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import profilephoto from '../../../Assets/Imgs/kev.jpg';

import logodarkicon from '../../../Assets/Imgs/MM_Logo_black.png';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  showMobilemenu() {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  }

  render() {
    return (
      <header className="topbar navbarbg" data-navbarbg="skin1">
        <Navbar className="top-navbar" dark expand="md">
          <div className="navbar-header" id="logobg" data-logobg="skin6">
            <NavbarBrand href="/">
              <b className="logo-icon">
                <img src={logodarkicon} alt="homepage" className="dark-logo" />
              </b>
            </NavbarBrand>

            <a
              className="nav-toggler d-block d-md-none"
              onClick={this.showMobilemenu}
              href=""
            >
              <i className="fas fa-bars" />
            </a>
          </div>
          <Collapse
            className="navbarbg"
            isOpen={this.state.isOpen}
            navbar
            data-navbarbg="skin1"
          >
            <Nav className="ml-auto float-right" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="pro-pic">
                  <img
                    src={profilephoto}
                    alt="user"
                    className="rounded-circle"
                    width="45"
                  />
                </DropdownToggle>
                <DropdownMenu right className="user-dd">
                  <DropdownItem divider />

                  <DropdownItem href="/pages/login">
                    <i className="fa fa-power-off mr-1 ml-1" /> Logout
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
export default Header;

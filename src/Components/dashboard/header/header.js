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

  logoutHandler = () => {
    localStorage.removeItem('token');
  };

  render() {
    return (
      <header className='topbar navbarbg' data-navbarbg='skin1'>
        <Navbar className='top-navbar' dark expand='md'>
          <div className='navbar-header' id='logobg' data-logobg='skin6'>
            <NavbarBrand href='/'>
              <b className='logo-icon'>
                <img src={logodarkicon} alt='homepage' className='dark-logo' />
              </b>
            </NavbarBrand>

            <button
              style={{ border: 'none', background: 'white' }}
              className='nav-toggler d-block d-md-none'
              onClick={this.showMobilemenu}
            >
              <i className='fas fa-bars' />
            </button>
          </div>
          <Collapse
            className='navbarbg'
            isOpen={this.state.isOpen}
            navbar
            data-navbarbg='skin1'
          >
            <Nav
              className='ml-auto float-right'
              navbar
              style={{ display: 'flex' }}
            >
              <a
                href='https://miracle-messages-production.netlify.com'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  height: '80%',
                  marginRight: '30px',
                  alignSelf: 'center',
                  textDecoration: 'none',
                  background: 'gray',
                  padding: '10px 15px',
                  color: 'white'
                }}
              >
                Live Map
              </a>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='pro-pic'>
                  <img
                    src={profilephoto}
                    alt='user'
                    className='rounded-circle'
                    width='45'
                  />
                </DropdownToggle>
                <DropdownMenu right className='user-dd'>
                  <DropdownItem divider />
                  <DropdownItem href='/login' onClick={this.logoutHandler}>
                    <i className='fa fa-power-off mr-1 ml-1' /> Logout
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

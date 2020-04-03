import React, {useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';


import profilephoto from '../../../Assets/Imgs/kev.jpg';

import logodarkicon from '../../../Assets/Imgs/MM_Logo_black.png';

const Header = () => {
  const { authState, authService } = useOktaAuth();
  const [ state, setState ] = useState({
    isOpen: false
  });

  if (authState.isPending) { 
    return <div>Loading...</div>;
  }

  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };

  const showMobilemenu = () => {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  }

  const logoutHandler = () => {
    // localStorage.removeItem('token');
    authService.logout()
  };


    return (
      <header className='topbar navbarbg' data-navbarbg='skin1'>
        <Navbar className='top-navbar' dark expand='md'>
          <div className='navbar-header' id='logobg' data-logobg='skin6'>
            <Link to="/">
              <NavbarBrand>
                <b className='logo-icon'>
                  <img src={logodarkicon} alt='homepage' className='dark-logo' />
                </b>
              </NavbarBrand>
            </Link>

            <button
              style={{ border: 'none', background: 'white' }}
              className='nav-toggler d-block d-md-none'
              onClick={showMobilemenu}
            >
              <i className='fas fa-bars' />
            </button>
          </div>
          <Collapse
            className='navbarbg'
            isOpen={state.isOpen}
            navbar
            data-navbarbg='skin1'
          >
            <Nav
              className='ml-auto float-right'
              navbar
              style={{ display: 'flex' }}
            >
              <Link
              to='/'
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
              </Link>
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
                  <DropdownItem href='/login' onClick={logoutHandler}>
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

export default Header;

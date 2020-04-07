import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Nav } from 'reactstrap';

const Sidebar = () => {

    return (
        <>
              <aside
        className='left-sidebar'
        id='sidebarbg'
        data-sidebarbg='skin6'
        // onMouseEnter={this.expandLogo}
        // onMouseLeave={this.expandLogo}
      >
          <Nav id='sidebarnav'>

                    <li className='sidebar-item'>
                      <NavLink
                        to='/admin/chapters'
                        className='sidebar-link'
                        activeClassName='active'
                      >
                        <i className='fas fa-building' />
                        <span className='hide-menu'>Chapters</span>
                      </NavLink>
                    </li>

                    <li className='sidebar-item'>
                      <NavLink
                        to='/admin/pending'
                        className='sidebar-link'
                        activeClassName='active'
                      >
                        <i className='fas fa-wrench' />
                        <span className='hide-menu'>Pending</span>
                      </NavLink>
                    </li>

                    <li className='sidebar-item'>
                      <NavLink
                        to='/admin/Sponsors'
                        className='sidebar-link'
                        activeClassName='active'
                      >
                        <i className='fas fa-hands-helping' />
                        <span className='hide-menu'>Sponsors</span>
                      </NavLink>
                    </li>

                    <li className='sidebar-item'>
                      <NavLink
                        to='/admin/volunteers'
                        className='sidebar-link'
                        activeClassName='active'
                      >
                        <i className='fas fa-users' />
                        <span className='hide-menu'>Volunteers</span>
                      </NavLink>
                    </li>

            </Nav>
      </aside>
        </>
    )
}

export default Sidebar;
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import DonateButton from '../DonateButton/DonateButton';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            MCNET
            <i className='fas fa-code'></i>
          </NavLink>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link' onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/services'
                className='nav-link'
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/programs'
                className='nav-link'
                onClick={handleClick}
              >
                Programs
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/sunday-school'
                className='nav-link'
                onClick={handleClick}
              >
                Sunday School
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link' onClick={handleClick}>
                Contact
              </NavLink>
            </li>
            <li>
              <DonateButton />
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

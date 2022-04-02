import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <div className='parent-div'>
      <div className='navContainer'>
        <div>
          <img src={logo} alt = 'logo'/>
        </div>
        <div className='nav-links-div'>
          <Link to='/home'>Home</Link>
          <Link to='/order-review'>Order Review</Link>
          <a href='/manage'>Manage Inventory</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <div className='parent-div'>
      <div className='navContainer'>
        <div>
          <img src={logo}/>
        </div>
        <div className='nav-links-div'>
          <a href='/home'>Home</a>
          <a href='/order'>Order Review</a>
          <a href='/manage'>Manage Inventory</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import "./Navbar.css"
function Navbar() {
  return (
      <div className="navbar-container" color='green'>
        <div className='logo'> LOGO </div>
        <div className="nav-fields">
            <ul>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>BEAUTY</li>
            </ul>
        </div>
        <div className="nav-input">
            <input type="text" placeholder='Search for products' />
        </div>
        <div className="nav-icon-box">
            <h1> T </h1>
            <h1> S </h1>
            <h1> A </h1>
        </div>
      </div>
  )
}

export default Navbar;

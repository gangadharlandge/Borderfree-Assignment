import React from 'react';
import "./Footer.css"
function Footer() {
  return(
      <div className="footer-container">
          <div className="left-container">
              <h3>HELP</h3> 
              <ul>
                  <li> Your Account</li>
                  <li>Order Status</li>
                  <li>FAQs</li>
              </ul>

          </div>
          <div className="center-container">
          <h3>ABOUT</h3> 
              <ul>
                  <li> About Us</li>
                  <li>Contact Us</li>
                  
              </ul>

          </div>
          <div className="right-container">
          <h3>RETAILERS</h3> 
              <ul>
                  <li>Business Development</li>
                  <li>Prospective Retailers</li>
                  <li>Existing Retailer Tools</li>
              </ul>
              
          </div>      
      </div>
  )
}

export default Footer;

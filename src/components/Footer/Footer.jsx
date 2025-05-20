// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <p>Copyright © 2025, FINTIDE - All Rights Reserved.</p>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css';
import logo1 from '../../assets/logo1.png'; // Replace with your desired image

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo1} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <h1 className="footer-note">
          Learn more about Crypto, visit <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer">coinbase.com</a>.
          <p className='rights'>Copyright © 2025, FINTIDE - All Rights Reserved.</p>
        </h1>
        <ul className="footer-links">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

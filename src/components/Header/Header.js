import React from 'react';
import './Header.css';
import logo from '../../assests/hca-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="HCA Healthcare" />
      </div>
      <div className="menu">
        <a href="#"><FontAwesomeIcon icon={faHome} /></a>
        <a href="#">My Health Resources</a>
        <a href="#">Specialties</a>
        <a href="#">Locations</a>
        <a href="#">Patients & Visitors</a>
        <a href="#">Careers</a>
        <a href="#">About Us</a>
        <a href="#">Find A Doctor</a>
        <a href="#">Manage Your Account</a>
        <a href="#">MyHealthONE</a>
        <a href="#">...</a>
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;

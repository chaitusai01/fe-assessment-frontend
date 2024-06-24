import React from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assests/HCAH-Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <Logo className="footer-logo" />
                <address>
                    HCA Houston Healthcare<br />
                    3737 Buffalo Speedway<br />
                    Suite 1400<br />
                    Houston, TX 77098
                </address>
            </div>
            <div className="footer-section">
                <h4>About Us</h4>
                <ul>
                    <li><a href="#">About HCA Houston</a></li>
                    <li><a href="#">Phone Directory</a></li>
                    <li><a href="#">Maps & Directions</a></li>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faBlogger} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

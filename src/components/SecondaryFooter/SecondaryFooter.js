import React from 'react';
import './SecondaryFooter.css';

const SecondaryFooter = () => {
    return (
        <div className="secondary-footer-container">
            <div className="secondary-footer-content">
                <div className="secondary-footer-text">
                    <span>Copyright 1999-2021<a href="#">C-HCA,Inc;</a>All rights reserved.</span>
                </div>
                <div className="secondary-footer-links">
                    <span>
                        <a href="#">Notice of Privacy Practices</a> |&nbsp;
                        <a href="#">Terms & Conditions</a> |&nbsp;
                        <a href="#">Notice at Collection</a> |&nbsp;
                        <a href="#">Privacy Policy</a> |&nbsp;
                        <a href="#">Do Not Sell My Personal Information</a> |&nbsp;
                        <a href="#">Social Media Policy</a> |&nbsp;
                        <a href="#">Acceptable Use Policy</a> |&nbsp;
                        <a href="#">HCA Nondiscrimination Notice</a> |&nbsp; 
                        <a href="#">Accessibility</a> |&nbsp;
                        <a href="#">Responsible Disclosure</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SecondaryFooter;

import React from 'react';
import './FindCare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FindCare = () => {
  return (
    <div className="find-care-container">
      <div className="find-care-content">
        <div className="find-care-text"><h1>Find Care</h1></div>

        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="help-text">
        <p>Need help? We're here.</p>
      </div>
    </div>
  );
};

export default FindCare;

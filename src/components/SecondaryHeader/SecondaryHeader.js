import React from 'react';
import './SecondaryHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const SecondaryHeader = () => {
  return (
    <div className="secondary-header-container">
      <div className="er-wait-times">
        <FontAwesomeIcon icon={faClock} />
        <a href="#" className="dropdown">View All ER Wait Times <span className="arrow">&#9662;</span></a>
      </div>
      <div className="appointment-alerts">
        <button className="appointment-button">
          <FontAwesomeIcon icon={faCalendarAlt} />
          Make an Appointment
        </button>
        <button className="alerts-button">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          Alerts <span className="alert-count">2</span>
        </button>
      </div>
    </div>
  );
};

export default SecondaryHeader;

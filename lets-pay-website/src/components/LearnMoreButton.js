import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LearnMoreButton.css';

const LearnMoreButton = ({ 
  title, 
  description, 
  ctaText = "Learn More", 
  ctaLink = "/why-us",
  className = "" 
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button 
        className={`learn-more-btn ${className}`}
        onClick={togglePopup}
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup} aria-label="Close popup">
              ×
            </button>
            <h3 className="popup-title">{title}</h3>
            <div className="popup-body">
              <p>{description}</p>
            </div>
            <div className="popup-footer">
              <Link to={ctaLink} className="popup-learn-more-btn" onClick={closePopup}>
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LearnMoreButton;


import React, { useState } from "react";
import "./PetCare.css";
import BookAppointment from "./BookAppointment";
import Footer from "./Footer";

const MedicareCareDetails = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="main-container">
      {/* Left Section: Text and Button */}
      <div className="first-content">
        <h1 className="text-5xl font-bold text-gray-900">
          Holistic Pet Care Solutions
        </h1>
        <h1>From Check-Ups to Grooming</h1>
        <button className="appoint-btn" onClick={handleButtonClick}>
          Book Appointment
        </button>
        
        {/* Statistics */}
        <div className="second-container">
          <div className="second-context">
            <img
              src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/home_page_image/uspIcons/homePageUsp1.webp"
              alt="125K+ Pets served"
              className="w-12 h-12 mb-2"
            />
            <p className="text-gray-700 text-sm">125K+ Pets served</p>
          </div>
          <div className="second-context">
            <img
              src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/home_page_image/uspIcons/homePageUsp2.webp"
              alt="1 Lac Groomings Completed"
              className="w-12 h-12 mb-2"
            />
            <p className="text-gray-700 text-sm">1 Lac Groomings Completed</p>
          </div>
          <div className="second-context">
            <img
              src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/home_page_image/uspIcons/homePageUsp3.webp"
              alt="Rated 4.8 Stars on Google"
              className="w-12 h-12 mb-2"
            />
            <p className="text-gray-700 text-sm">Rated 4.8 (Stars) on Google</p>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={handleClosePopup}>
              ×
            </button>
            <BookAppointment />
          </div>
        </div>
      )}
      <div style={{marginTop: "170px"}}>
        <Footer />
      </div>
    </div>
  );
};

export default MedicareCareDetails;

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for custom styles
import RegisterPopUp from './RegisterPopUp'; // Import the RegisterPopUp component
import Pets from './Pets-logo.jpg'
import AboutUs from './AboutUs';
import MedicalCare from './PetCareHeroSection';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterPopupVisible, setIsRegisterPopupVisible] = useState(false);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  

    const handleAbout = (e)=>{
      e.preventDefault()
      navigate("/aboutus")
    }

    const handlePetCare = (e)=>{
      e.preventDefault()
      navigate("/petcare")
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openRegisterPopup = () => {
    setIsRegisterPopupVisible(true);
  };

  const closePopup = () => {
    setIsRegisterPopupVisible(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left side: Logo */}
        <div className="navbar-logo">
          <img src={Pets} alt="Logo" className="logo" />
        </div>

        {/* Right side: Links */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-list">
          <button onClick={handleHome}>Home</button>
            <li onClick={handlePetCare}><a href="/petcare">Medical Care</a></li>
            <li onClick={handleAbout}><a href="/about-us-volunteer">About/Volunteer</a></li>
            <li onClick={openRegisterPopup}><a href="Login"></a> 
            Login/Register
            </li>
          </ul>
        </nav>

        {/* Menu Toggle Button for mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </div>

      {/* RegisterPopUp Component */}
      {isRegisterPopupVisible && (
  <RegisterPopUp closePopup={closePopup} />
)}

    </header>
  );
};

export default Navbar;

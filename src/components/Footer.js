import React from "react";
import "./Footer.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/petsdetails"); // Navigate to a specific route upon login
  };

  const handleMedicalCare = (e) => {
    e.preventDefault();
    navigate("/petcare"); // Navigate to a specific route upon login
  };

  const handleAboutUs = (e) => {
    e.preventDefault();
    navigate("/aboutus"); // Navigate to a specific route upon login
  };

  const handleAdoptPets = (e) => {
    e.preventDefault();
    navigate("/adoptpets"); // Navigate to a specific route upon login
  };
  const handleRehomePets = (e) => {
    e.preventDefault();
    navigate("/rehomepets"); // Navigate to a specific route upon login
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/registerpopup"); // Navigate to a specific route upon login
  };
  
  const handleAdoptionTips = (e) => {
    e.preventDefault();
    navigate("/tips-adoption");
  };

  const handleRehomingTips = (e) => {
    e.preventDefault();
    navigate("/tips-rehoming");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Hearts and Paws</h3>
          <ul className="footer-links">
            <li>
              Efforts are about having a shelter for them. We can even
              provide an option to adopt the pets which can be good companions
              to the humans. 
            </li>
            <li>
            This initiative of being a platform between the
              NGO's that provides the shelters for street animals creates a
              culture of sympathy.
            </li>
            <li>
            Medical Treatment and rehabilitation is most
              important aspect where it can help to reduce the suffering of the
              animals as far as possible.
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li onClick={handleAdoptPets}>
              <a href="/about-us">Adopt a Pet</a>
            </li>
            <li onClick={handleRehomePets}>
              <a href="/about-us">Rehome a Pet</a>
            </li>
            <li onClick={handleMedicalCare}>
              <a href="/terms">Medical Care</a>
            </li>
            <li onClick={handleAdoptionTips}>
              <a href="/terms">Tips for Adoption</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li onClick={handleAboutUs}>
              <a href="/about-us">About Us</a>
            </li>
            <li onClick={handleRegister}>
              <a href="/contact-us">Register</a>
            </li>
            <li onClick={handleRehomingTips}>
              <a href="/terms">Tips for Rehoming</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

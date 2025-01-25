import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import RegisterSection from "./components/RegisterSection";
import RegisterPopup from "./components/RegisterPopUp";
import WhyChoose from "./components/WhyChoose";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";
import DogCardGallery from "./components/AdoptPets";											
import RehomeDog from "./components/RehomeDog";
import AdoptPets from "./components/AdoptPets";
import Pets from './components/Pets-logo.jpg'								 
import AboutUs from "./components/AboutUs";
import MedicalCare from "./components/PetCareHeroSection";										  
import PetCareSection from "./components/PetCareHeroSection";
import AdoptionTips from "./components/AdoptionTips";
import RehomingTips from "./components/RehomingTips";
import PetsDetailsPage from "./components/PetsDetailsPage";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <RegisterSection />
              <HeroSection />
              <WhyChoose />
              <AboutSection />
              <Footer />
            </>
          }
        />
        
        {/* Other Routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/petcare" element={<PetCareSection />} />
        <Route path="/petsdetails" element={<PetsDetailsPage />} />										   
        <Route path="/registerpopup" element={<RegisterPopup />} />
        <Route path="/adoptpets" element={<AdoptPets />} />
        <Route path="/rehomepets" element={<RehomeDog />} />
        <Route path="/tips-adoption" element={<AdoptionTips />} />
        <Route path="/tips-rehoming" element={<RehomingTips />} />
      </Routes>
    </div>
  );
};

export default App;

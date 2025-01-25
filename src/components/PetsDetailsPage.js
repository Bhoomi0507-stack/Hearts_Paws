import React from "react";
import "./HeroSection.css"; // Import CSS for styling
import { Navigate, useNavigate } from "react-router-dom";
import AdoptPet from './homepage_searchpet.svg'
import RehomePet from './homepage_rehomepet.svg'

const PetsDetailsPage = () => {
  const navigate = useNavigate();
  const handleAdopt = (e) => {
    e.preventDefault();
    navigate("/adoptpets");
  };

  const handleRehome = (e) => {
    e.preventDefault();
    navigate("/rehomepets");
  };
  return (
    <section
      className="home-one home1_bgi1"
    >
      <div className="container">
        <div className="row posr">
          <div className="col-12 col-lg-5">
            {/* Adopt a Pet Button */}
            <div className="heroButton" onClick={handleAdopt}>
              {/* <a href="/adopt-a-pet/" className="heroButton__anchor"></a> */}
              <div className="heroButton__wrapper">
                <img 
                  src={AdoptPet}
                  alt="Adopt a Pet"
                />
                <div className="heroButton__content">
                  <h3>I want to adopt a pet</h3>
                  <p>Search the available pets listed on Hearts and Paws</p>
                </div>
              </div>
            </div>

            {/* Rehome My Pet Button */}
            <div className="heroButton" onClick={handleRehome}>
              <a href="/list-a-pet/" className="heroButton__anchor"></a>
              <div className="heroButton__wrapper">
                <img
                  src={RehomePet}
                  alt="Rehome a Pet"
                />
                <div className="heroButton__content">
                  <h3>I need to rehome my pet</h3>
                  <p>
                    Start the process. It's free to list your pet on Hearts and
                    Paws
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetsDetailsPage;

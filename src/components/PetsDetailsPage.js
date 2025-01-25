import React from "react";
import "./PetsDetailsPage.css"; // Import CSS for styling
import { Navigate, useNavigate } from "react-router-dom";

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
              <a href="/adoptpets" className="heroButton__anchor"></a>
              <div className="heroButton__wrapper">
                <img
                  style={{ height: "auto", width: "auto" }}
                  src={Buddy}
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
              <a href="/rehomepets" className="heroButton__anchor"></a>
              <div className="heroButton__wrapper">
                <img
                  style={{ height: "auto", width: "auto" }}
                  src="/home-icon-1.png"
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

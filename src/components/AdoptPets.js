import React, { useState } from "react";
import RegisterPopUp from "./RegisterPopUp";

// Importing images
import Dog1 from './Dog1.jpg';
import Dog4 from './Dog4.jpg';
import Dog3 from './Dog3.jpg'
import Cat1 from './Cat1.jpg';
import Cat2 from './Cat2.jpg';


const AdoptPets = () => {
  const [popup, setPopup] = useState({ isVisible: false, dogName: "" });

  // Local pet images
  const dogs = [
    {
      name: "Zeus",
      image: Dog1,
      description: "Features: Good with adults.Good with children.Needs to be the ONLY PET in the home.Has lived with cats - it didn’t go well.Can be left alone for short to medium periods.Travels well in cars.",
    },
    {
      name: "Bella",
      image: Cat1,
      description: "Features: Good with children Good with people in general.Is a “lap cat”.Uses a cat flap.Is active and playful.Accepts being handled/stroked.Enjoys going outside / needs a garden.",
    },
    {
      name: "Musa",
      image: Cat2,
      description: "Features: Good with children.Good with people in general.Is active and playful.Accepts being handled/stroked.",
    },
    {
      name: "Roxy",
      image: Dog4,
      description: "Features: Good with adults,Good with children,Has lived with dogs - it was fine Is active and lively Is only walked on the leash Can be left alone for short to medium periods.",
    },
    {
      name: "Rodn",
      image: Dog3,
      description: "Features: Good with adults,Good with children,Has lived with dogs - it was fine Is active and lively Is only walked on the leash Can be left alone for short to medium periods.",
    },
  ];

  const handleCardClick = (dogName) => {
    setPopup({ isVisible: true, dogName });
  };

  const closePopup = () => {
    setPopup({ isVisible: false, dogName: "" });
  };

  return (
    <div style={{ padding: "20px", width: "100%", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Adopt a Pet</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {dogs.map((dog, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handleCardClick(dog.name)}
          >
            <img
              src={dog.image}
              alt={dog.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "10px 0" }}>{dog.name}</h3>
              <p style={{ margin: "0", color: "#555" }}>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {popup.isVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <h2>{popup.dogName} is being adopted!</h2>
            <p>Thank you for giving {popup.dogName} a loving home.</p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptPets;

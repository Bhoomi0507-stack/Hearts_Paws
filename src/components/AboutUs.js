import React from 'react';
import './AboutUs.css'; // Assuming you use an external CSS file for styles
import WhyChoose from './WhyChoose';
import RegisterSection from './RegisterSection';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <div className="group">
        <div className="header">
          <div className="image-container">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F7d283b594b06c43ac98601aad911cc26.cdn.bubble.io%2Ff1729172802014x476322707330691900%2Fgreen-hand-paw-1.png?w=1024&h=269&auto=compress&dpr=1.5&fit=max"
              alt="Green Hand Paw Logo"
            />
          </div>
          <h1>About Us</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="group mission-statement">
        <h2>We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets</h2>
        <p>Who we are, and why we created Hearts and Paws</p>
        <p>
          Hearts and Paws has been set up by a group of animal lovers who are committed to ending pet homelessness and irresponsible
          rehoming practices. This is part of charity so rest assured that we always prioritise pet
          welfare over profit.
        </p>

        <div className="statistics">
          <div className="stat-item">
            <img
              src="https://7d283b594b06c43ac98601aad911cc26.cdn.bubble.io/f1732029736503x600412204097709200/about_us_page_house3.7million_icon.svg"
              alt="3.7 Million Icon"
            />
            <div>
                          <h3>3.7 million</h3>
              <p>
                pets from Indian homes have been given up in the past year according to the PFMA (Pet Food Manufacturers Association).
              </p>
            </div>
          </div>
          <div className="stat-item">
<img
              src="https://7d283b594b06c43ac98601aad911cc26.cdn.bubble.io/f1732029948419x162178858762833440/about_us_page_lifestylechanges_icon.svg"
              alt="Lifestyle Changes Icon"
            />
            <div>
              <h3>Lifestyle changes</h3>
              <p>
                Both in living and work arrangements, plus financial obstacles are cited as the most common reasons for giving
                up a pet. Whatever your reasons, we are here for you.
              </p>
            </div>
          </div>
          <div className="stat-item">
          <img
              src="https://7d283b594b06c43ac98601aad911cc26.cdn.bubble.io/f1732029736503x600412204097709200/about_us_page_house3.7million_icon.svg"
              alt="3.7 Million Icon"
            />
            <div>
              <h3>Hearts and Paws is here to help</h3>
              <p>
                By creating a pet adoption community where people who want to adopt safely connect with people who need to
                rehome a dog, cat or rabbit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What We Do */}
      <div className="group what-we-do">
        <WhyChoose />
      </div>

      <br />
      <br />
      {/* Call to Action */}
      <div className="group call-to-action">
        <RegisterSection />
      </div>

      {/* Closing Statement */}
      <div className="group closing-statement">
        <p>
          We don't know how many dogs, cats and rabbits will continue to be surrendered over the coming months because their
          owners can't keep them. But we do know that rescue centres are telling us that they are struggling with space and the
          funds to care for them. If rescue centres are full what will happen to the pets that need the most help?
        </p>
        <p>
          At Hearts and Paws we are determined that things don’t have to be this way. Not in our 21st century, web-connected world.
          So we created Hearts and Paws, an online community where people who can’t keep their pets connect directly with people who
          want to adopt a pet.
        </p>
        <p>
          Together, we’ll keep dogs, cats and rabbits from ever seeing the inside of a rescue centre or shelter, so they can love
          and be loved in new homes. Saving lives. Unburdening rescue centres. Creating a place where we can make a positive
          impact. Ending pet homelessness, and enabling responsible rehoming. That’s our mission. That’s what we want you to
          know about us.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

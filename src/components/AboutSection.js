import React from 'react';
import './AboutSection.css'; // If you need to add custom styles, link to a separate CSS file

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="about_content">
              <h1>
                Straightforward Pet Rehoming And Adoption
              </h1>
              <p>
                Hearts and Paws is a new digital platform with real people behind the
                scenes. Our platform connects potential adopters with people who
                need to rehome their pets. This makes it easier for good people to
                adopt the right pet whilst maximising the chance of pets finding
                their forever home.
                <br />
                <br />
                We offer a non-judgmental service to rehomers and give them full
                control of the process.
                <br />
                <br />
                We're also helping to reduce the number of animals going into
                shelters. This frees up space and resources for the pets who have
                been abandoned, need immediate help or specialist care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

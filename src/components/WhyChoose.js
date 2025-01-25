import React from "react";
import "./WhyChoose.css"; // Import CSS for styles

const WhyChoose = () => {
  return (
    <section id="why-chose" className="whychose_us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              <h4 className="h2">Why Choose Hearts and Paws?</h4>
              <p>Because we enable direct pet adoption, from one good home to another.</p>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="why_chose_us">
              <div className="icon">
                <span
                  className="hearts-img"
                  
                ></span>
              </div>
              <div className="details">
                <h4>Kind To Everyone</h4>
                <p>
                  We believe that...
                  <ul>
                    <li>every pet deserves to be safe, loved and respected</li>
                    <li>
                      people who are great candidates for adoption shouldn't be put off by
                      complicated processes or one-size-fits-all rules
                    </li>
                    <li>
                      people who need to rehome their pets should be empowered to do so without being
                      judged
                    </li>
                  </ul>
                </p>
              </div>
          </div>
          <div className="why_chose_us">
              <div className="icon">
                <span
                  className="hands-dog-img"
                  
                ></span>
              </div>
              <div className="details">
                <h4>Advocate Adoption</h4>
                <p>
                  This value sits at the heart of everything we do.
                  <br />
                  <br />
                  Adoption reduces the demand for puppy farming, industrial-scale breeding, illegal
                  pet imports and other forms of exploitation and abuse.
                  <br />
                  <br />
                  We’re proud supporters of #AdoptDontShop.
                </p>
              </div>
          </div>
          <div className="why_chose_us">
              <div className="icon">
                <span
                  className="stars-person-img"
                 
                ></span>
              </div>
              <div className="details">
                <h4>Responsible Rehoming</h4>
                <p>
                  We’re champions of rehoming. But not at any cost.
                  <br />
                  <br />
                  We believe in finding the right match between adopters and pets, not taking risks or
                  rushing.
                  <br />
                  <br />
                  We always prioritise pet welfare. And we offer a safer, more ethical and
                  professional alternative to online marketplaces like Preloved, Pets4Homes, Facebook
                  and Gumtree.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
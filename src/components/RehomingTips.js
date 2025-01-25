import React from "react";

const RehomingTips = () => {
  return (
    <div
      className="bubble-element Group flex column"
      style={{
        boxShadow: "2px 2px 8px 4px rgb(231, 231, 231)",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "50px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <br />
      <h1 style={headerStyle}>Top Tips for Rehoming</h1>
      <div>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F7d283b594b06c43ac98601aad911cc26.cdn.bubble.io%2Ff1726224244272x699283478019037000%2Fare-you-ready-to-adopt-image.jpg?w=1024&h=412&auto=compress&dpr=1.5&fit=max"
          alt="Ready to Adopt"
          style={{ width: "700px", height: "300px", borderRadius: "8px" }}
        />
        <h1 style={headerStyle}>
          Putting a pet up for adoption is never easy. But following our tips
          can help make the process that little bit more straightforward. Here
          are some important things to do once you’ve decided to rehome your
          pet.
        </h1>

        <br />
        <h1 style={headerStyle}>Create a great profile for your pet</h1>
        <p style={paragraphStyle}>
          Give your pet the best chance of finding their forever home by
          creating a profile that shows how great they are! Add lots of detail
          and upload your best pictures so potential adopters get a good sense
          of your pet and can judge whether they can offer them the right home.
        </p>
      </div>

      <h1 style={headerStyle}>
        Share lots of information with potential adopters
      </h1>
      <p style={paragraphStyle}>
        Potential adopters will probably have lots of questions. To speed up the
        process, make sure you include essential information in your pet’s
        profile and be ready to share more details if asked. As well as basic
        information such as breed and age, include the following:
      </p>

      <div style={{marginTop:"75px"}}>
      <ul >
  <li style={liStyle}>Your pet’s history: how long you’ve had them, where you got them from and why you need to rehome them.</li>
  <li style={liStyle}>Add your photos of your pet, and make sure they are good quality, showing your pet at their best. This is important if you want to attract the adopter's attention.</li>
  <li style={liStyle}>If you are listing a cat or rabbit, do they live indoors only, or do they spend time in the garden?</li>
  <li style={liStyle}>Details about who and which other animals your pet has lived with, e.g., children and other pets.</li>
  <li style={liStyle}>Your pet’s favourite activities and toys.</li>
  <li style={liStyle}>A description of their personality, preferences, and habits - are they quiet, active, do they like to be picked up, stroked or petted, or do they prefer their own space?</li>
  <li style={liStyle}>Anything they're scared of such as fireworks, people in uniform, or other animals.</li>
  <li style={liStyle}>The type of food they eat including the brand, frequency of meals, and amount being fed.</li>
  <li style={liStyle}>Tell people about the positives - what are the best things that you love about your pet?</li>
  <li style={liStyle}>Are there any slightly undesirable behaviours that an adopter will need to know about? This can be anything from resource guarding, pulling excessively on the lead (for dogs), or spraying indoors (for cats).</li>
  <li style={liStyle}>Allergies, health conditions, and any medications your pet takes - and have they been to the vets for vaccinations? Is their wormer/flea treatment up to date? Have they had their teeth checked regularly?</li>
  <li style={liStyle}>Is your pet neutered?</li>
  <li style={liStyle}>State if they’ve been microchipped or not.</li>
</ul>
      </div>

      
    </div>
  );
};

const headerStyle = {
  fontSize: "24px",
  color: "purple",
  marginBottom: "10px",

  paddingBottom: "5px",
};



const liStyle ={
    fontSize: "15px",
    color: "grey",
  marginBottom: "10px",
  paddingBottom: "5px",
}



const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  marginBottom: "15px",
};

export default RehomingTips;

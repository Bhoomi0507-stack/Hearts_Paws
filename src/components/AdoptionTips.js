import React from "react";

const AdoptionTips = () => {
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
        <br/>
      <h1 style={headerStyle}>Top Tips for Adopters</h1>
      <div>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F7d283b594b06c43ac98601aad911cc26.cdn.bubble.io%2Ff1726224244272x699283478019037000%2Fare-you-ready-to-adopt-image.jpg?w=1024&h=412&auto=compress&dpr=1.5&fit=max"
          alt="Ready to Adopt"
          style={{ width: "700px",height:"300px", borderRadius: "8px" }}
        />
        <p style={paragraphStyle}>
          How to make the adoption process go smoothly
        </p>
        <p style={paragraphStyle}>
          At Hearts and Paws, we want all adoptions to be a ‘happy ever after’ – for
          humans and pets alike. So before you start the process, check out our
          top tips for a successful adoption.
        </p>
      </div>

      <h1 style={headerStyle}>Create a Strong Profile</h1>
      <p style={paragraphStyle}>
        Create your adopter profile before you make an enquiry. Include lots of
        information about you, your home, your lifestyle, whether you’ve had
        pets before, and what kind of pet you’re looking for. You’re more likely
        to get chosen by a rehomer if you have a great profile.
      </p>

      <h1 style={headerStyle}>Don’t Take the Conversation Off Hearts and Paws</h1>
      <p style={paragraphStyle}>
        For everyone’s safety, only chat with rehomers using our chat facility.
        Don’t share any personal information such as email address, phone
        number, home address, or bank details. If anyone asks you for these,
        let us know immediately.
      </p>

      <h1 style={headerStyle}>Find a Pet That Suits Your Lifestyle</h1>
      <p style={paragraphStyle}>
        To maximise your chances of success, only apply for pets that match
        your lifestyle and the level of commitment you’re able to offer. For
        example, if you live in a city, don’t apply for a nervous dog who’s only
        ever lived in the countryside.
      </p>

      <h1 style={headerStyle}>Ask Lots of Questions</h1>
      <p style={paragraphStyle}>
        Asking the Hearts and Paws team and the rehomer lots of questions is another
        great way to find the right pet and make sure you can give them
        everything they need.
      </p>

      <h1 style={headerStyle}>Get the Right Paperwork</h1>
      <p style={paragraphStyle}>
        Make sure you ask the rehomer for the details of the pet’s current vet,
        vaccination records, microchip details, flea and worming treatments, and
        any other relevant paperwork.
      </p>

      <h1 style={headerStyle}>Only Go Through With the Adoption If You’re Sure</h1>
      <p style={paragraphStyle}>
        As soon as the pet is handed over to you, you become their legal owner.
        You can’t return them to their original home if you change your mind,
        and Hearts and Paws isn’t a rescue service, so we can’t take them into our
        care either.
      </p>

      <h1 style={headerStyle}>Be Sensitive and Respectful Towards the Rehomer</h1>
      <p style={paragraphStyle}>
        For most people, giving up a pet for adoption is heart-breaking. Please
        bear this in mind when you’re chatting to a rehomer.
      </p>
    </div>
  );
};

const headerStyle = {
  fontSize: "24px",
  color: "purple",
  marginBottom: "10px",
  
  paddingBottom: "5px",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  marginBottom: "15px",
};

export default AdoptionTips;

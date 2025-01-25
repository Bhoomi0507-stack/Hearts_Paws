import React, { useState } from "react";

const RehomePetForm = () => {
  const [selectedPet, setSelectedPet] = useState("");
  const [formData, setFormData] = useState({ contact: "", email: "" });
  const [notification, setNotification] = useState("");

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    setSelectedPet(e.target.value);
    setNotification(""); // Clear any previous notification
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPet && formData.contact && formData.email) {
      setNotification(`You have successfully chosen a new home for your PET: ${selectedPet}`);
      setFormData({ contact: "", email: "" }); // Reset form
    } else {
      setNotification("Please fill in all fields before submitting.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Rehome Your Pet</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Dropdown */}
        <label>
          Select Pet to Rehome:
          <select
            value={selectedPet}
            onChange={handleDropdownChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">-- Choose an option --</option>
            <option value="Rehome a Cat">Rehome a Cat</option>
            <option value="Rehome a Dog">Rehome a Dog</option>
          </select>
        </label>

        {/* Contact Input */}
        <label>
          Contact Number:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </label>

        {/* Email Input */}
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>

      {/* Notification */}
      {notification && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {notification}
        </div>
      )}
    </div>
  );
};

export default RehomePetForm;

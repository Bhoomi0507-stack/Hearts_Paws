import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPopUp = ({ closePopup }) => {
  const [notification, setNotification] = useState("");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setNotification("You have registered successfully. Please login.");
    setRegisterForm({ fullName: "", email: "", password: "" }); // Clear form
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/petsdetails");
    setNotification("You have LoggedIn successfully. Please continue browsing.");
    // closePopup();  // Ensure closePopup is being called here
    // setLoginForm({ email: "", password: "" }); // Clear form
  };

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
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
          position: "relative",
          backgroundColor: "white",
          width: "80%",
          maxWidth: "800px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          X
        </button>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
          }}
        >

          {/* Register */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Register</h2>
            <form style={{ width: "100%" }} onSubmit={handleRegister}>
              <div style={{ marginBottom: "10px" }}>
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={registerForm.fullName}
                  onChange={(e) => handleInputChange(e, setRegisterForm)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={registerForm.email}
                  onChange={(e) => handleInputChange(e, setRegisterForm)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={registerForm.password}
                  onChange={(e) => handleInputChange(e, setRegisterForm)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </form>
            {notification && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "4px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {notification}
              </div>
            )}
          </div>

          {/* Login */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Login</h2>
            <form style={{ width: "100%" }} onSubmit={handleLogin}>
              <div style={{ marginBottom: "10px" }}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={(e) => handleInputChange(e, setLoginForm)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={(e) => handleInputChange(e, setLoginForm)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default RegisterPopUp;

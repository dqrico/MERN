import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Syling for results
  const resultsFormStyle = {
    textAlign: "left",
    width: "400px",
    margin: "auto",
  };

  // Styling for input form
  const inputFormStyle = {
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    padding: "2px 10px",
    margin: "5px 125px",
  };

  return (
    <div>
      <form style={{ marginTop: "20px" }}>
        <div style={inputFormStyle}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={inputFormStyle}>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={inputFormStyle}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={inputFormStyle}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={inputFormStyle}>
          <label htmlFor="confirmPassord">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>

      <div style={resultsFormStyle}>
        <h3 style={{ textAlign: "center" }}>Your Form Data</h3>
        <p>
          <label>First Name: </label>
          {firstName}
        </p>
        <p>
          <label>Last Name: </label>
          {lastName}
        </p>
        <p>
          <label>Email: </label>
          {email}
        </p>
        <p>
          <label>Password: </label>
          {password}
        </p>
        <p>
          <label>Confirm Password: </label>
          {confirmPassword}
        </p>
      </div>
    </div>
  );
};

export default Form;

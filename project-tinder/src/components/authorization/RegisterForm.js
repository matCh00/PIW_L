import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Authorization.css";
import DatabaseService from "../../services/DatabaseService";


const RegisterForm = () => {
  
  // nawigowanie po stronach
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    DatabaseService.addUser(username, email, password)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth__container">
      <input
        id="registerUsername"
        className="input inputTwo auth__input"
        type="text"
        onChange={handleUsername}
        spellCheck="false"
        placeholder="type username..."
      />

      <input
        id="registerEmail"
        className="input inputTwo auth__input"
        type="text"
        onChange={handleEmail}
        spellCheck="false"
        placeholder="type email..."
      />

      <input
        id="registerPassword"
        className="input inputTwo auth__input"
        type="text"
        onChange={handlePassword}
        spellCheck="false"
        placeholder="type password..."
      />

      <button
        name="submitButton"
        className="button buttonTwo auth__button"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default RegisterForm;

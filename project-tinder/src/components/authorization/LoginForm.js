import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import DatabaseService from "../../services/DatabaseService";
import "../../assets/Authorization.css";


const LoginForm = () => {

  // użytkownik
  const { user, setUser, userLS, setUserLS } = useContext(UserContext);

  // nawigowanie po stronach
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      DatabaseService.getUserList()
        .then((res) => {
          let users = res.data;

          if (
            users.some(
              (user) => user.username === username && user.password === password
            ) === false
          ) {
            alert("Wrong username or password");
          } 
          else {
            const user = users.find(
              (user) => user.username === username && user.password === password
            );
            setUser(user.username);
            setUserLS(user.username);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } 
    else {
      alert("Fill the fields");
    }
  };

  return (
    <div className="auth__container">
      <input
        id="loginUsername"
        className="input inputTwo auth__input"
        type="text"
        onChange={handleUsername}
        spellCheck="false"
        placeholder="type username..."
      />

      <input
        id="loginPassword"
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

export default LoginForm;

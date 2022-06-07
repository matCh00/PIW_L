import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import DatabaseService from "../../services/DatabaseService";
import "../../assets/Authorization.css";

import { auth } from "../../firebase/init";
import { logInWithEmailAndPassword, logInWithGoogle, logInWithGithub } from "../../firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";


const LoginForm = () => {

  const [u, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading)
        return
    if (u)
        navigate("/");
    if(error)
        console.error({error});
  }, [u, loading]);

  // użytkownik
  const { user, setUser, userLS, setUserLS } = useContext(UserContext);

  // nawigowanie po stronach
  let navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const username = useRef(null);
  const password = useRef(null);

  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = () => {
    if (username.current.value !== "" && password.current.value !== "") {
      DatabaseService.getUserList()
        .then((res) => {
          // let users = res.data;
          let users = res;

          if (
            users.some(
              (user) => user.username === username.current.value && user.password === password.current.value
            ) === false
          ) {
            alert("Wrong username or password");
          } 
          else {
            const user = users.find(
              (user) => user.username === username.current.value && user.password === password.current.value
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

  const emailPasswordLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(username, password)
  }

  return (
    <div className="auth__container">
      <input
        id="loginUsername"
        className="input inputTwo auth__input"
        type="text"
        //onChange={handleUsername}
        ref={username}
        spellCheck="false"
        placeholder="type username / email..."
      />

      <input
        id="loginPassword"
        className="input inputTwo auth__input"
        type="text"
        //onChange={handlePassword}
        ref={password}
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

      <button 
        onClick={logInWithGoogle}
        className="button buttonTwo auth__button2"
      >
        Login with Google
      </button>

      <button 
        onClick={logInWithGithub}
        className="button buttonTwo auth__button2"
      >
        Login with Github
      </button>

      <button 
        onClick={(e) => emailPasswordLogin(e)}
        className="button buttonTwo auth__button2"
      >
        Login with Email and Password
      </button>
      
  </div>
  );
};

export default LoginForm;

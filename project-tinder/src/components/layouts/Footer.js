import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../assets/Layouts.css";


const Footer = () => {

  // użytkownik
  const { user } = useContext(UserContext);

  return (
    <footer className="footer">
      <div className="footer__container">
        Hello {user} !
      </div>
    </footer>
  );
};

export default Footer;

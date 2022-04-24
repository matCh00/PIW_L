import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import LoginForm from "../components/authorization/LoginForm";
import "../assets/Pages.css";


const LoginPage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <LoginForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default LoginPage;

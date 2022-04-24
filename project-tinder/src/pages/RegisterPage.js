import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import RegisterForm from "../components/authorization/RegisterForm";
import "../assets/Pages.css";


const RegisterPage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <RegisterForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;

import React from 'react'
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import Message from "../components/sendMessage/Message";
import "../assets/Pages.css";


const SendMessage = () => {
  return (
    <div className="pages__container">
      <NavBar />
      <div className="view__container">
        <Message />
      </div>
      <Footer />
    </div>
  );
};

export default SendMessage;
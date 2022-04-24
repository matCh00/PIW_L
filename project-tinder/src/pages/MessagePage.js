import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import Message from "../components/message/Message";
import "../assets/Pages.css";


const MessagePage = () => {
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

export default MessagePage;

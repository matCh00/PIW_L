import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import GroupAnnouncement from "../components/addGroup/GroupAnnouncement";
import "../assets/Pages.css";


const AddGroup = () => {
  return (
    <div className="pages__container">
      <NavBar />
      <div className="view__container">
        <GroupAnnouncement />
      </div>
      <Footer />
    </div>
  );
};

export default AddGroup;

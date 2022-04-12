import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import StudentAnnouncement from "../components/addAnnouncement/StudentAnnouncement";
import "../assets/Pages.css";


const AddAnnouncement = () => {
  return (
    <div className="pages__container">
      <NavBar />
      <div className="view__container">
        <StudentAnnouncement />
      </div>
      <Footer />
    </div>
  );
};

export default AddAnnouncement;

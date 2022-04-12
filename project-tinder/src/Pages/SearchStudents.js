import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import Students from "../components/searchStudents/Students";
import "../assets/Pages.css";


const SearchStudents = () => {
  return (
    <div className="pages__container">
      <NavBar />
      <div className="view__container">
        <Students />
      </div>
      <Footer />
    </div>
  );
};

export default SearchStudents;

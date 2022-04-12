import React from 'react';
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import Groups from "../components/searchGroups/Groups";
import "../assets/Pages.css";


const SearchGroups = () => {
  return (
    <div className="pages__container">
      <NavBar />
      <div className="view__container">
        <Groups />
      </div>
      <Footer />
    </div>
  );
};

export default SearchGroups;

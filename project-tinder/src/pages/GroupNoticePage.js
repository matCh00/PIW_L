import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import GroupNotice from "../components/groupNotice/GroupNotice";
import "../assets/Pages.css";


const GroupNoticePage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <GroupNotice />
      </div>
      
      <Footer />
    </div>
  );
};

export default GroupNoticePage;

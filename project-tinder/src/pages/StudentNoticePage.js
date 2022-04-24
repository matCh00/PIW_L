import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import StudentNotice from "../components/studentNotice/StudentNotice";
import "../assets/Pages.css";


const StudentNoticePage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <StudentNotice />
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentNoticePage;

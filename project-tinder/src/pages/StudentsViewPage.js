import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import StudentsSearch from "../components/studentSearch/StudentsSearch";
import StudentsShow from "../components/studentSearch/StudentsShow";
import { StudentProvider } from "../contexts/StudentContext";
import "../assets/StudentsView.css";
import "../assets/Pages.css";


const StudentsViewPage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <StudentProvider>
          <StudentsSearch />
          <StudentsShow />
        </StudentProvider>
      </div>

      <Footer />
    </div>
  );
};

export default StudentsViewPage;

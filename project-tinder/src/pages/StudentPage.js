import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import StudentForm from "../components/studentPage/StudentForm";
import "../assets/Pages.css";
import { useParams, useLocation } from "react-router-dom";

// w App.js deklarujemy zmienną id w ścieżce -> ":id"
// w StudentsShow.js w <Link to=...> przekazujemy id studenta w ścieżce
// w StudentsShow.js w <Link state=...> przekazujemy objekt studenta jako parametr


const StudentPage = () => {

  // useParams - odczytanie parametru w ścieżce
  const { id } = useParams();

  // useLocation - odczytanie objektu z state
  const student = useLocation().state.student;

  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <StudentForm student={student} />
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentPage;

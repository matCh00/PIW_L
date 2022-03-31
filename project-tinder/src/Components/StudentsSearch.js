import React, { useContext, useState } from "react";
import { StudentsContext } from "./Students";

const StudentsSearch = () => {

  // stany przekazywane do innego komponentu
  const {setDescription, setTag, setSubject, click, setClick} = useContext(StudentsContext);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const clicked = (e) => {
    setClick(!click);
  };


  return (
    <div className="searchStudents__container">
      <input
        id="descSearch"
        className="input inputOne searchStudents__input"
        type="text"
        onChange={handleDescription}
        spellCheck="false"
        placeholder="find by description..."
      />

      <input
        id="tagSearch"
        className="input inputOne searchStudents__input"
        type="text"
        onChange={handleTag}
        spellCheck="false"
        placeholder="find by tag..."
      />

      <input
        id="subjSearcg"
        className="input inputOne searchStudents__input"
        type="text"
        onChange={handleSubject}
        spellCheck="false"
        placeholder="find by subject..."
      />

      <button
        name="filterStudentsButton"
        className="button buttonOne searchStudents__button"
        onClick={() => clicked()}
      >
        Filter
      </button>
    </div>
  );
};

export default StudentsSearch;

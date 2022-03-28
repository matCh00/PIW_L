import React, { useState, createContext } from 'react';
import SearchStudents from './SearchStudents';
import ShowStudents from './ShowStudents';
import "./Components.css";

export const StudentsContext = createContext(null);

const Students = () => {

    const [filter, setFilter] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [subject, setSubject] = useState("");
    const [click, setClick] = useState(false);

  return (
    <StudentsContext.Provider value={{ filter, setFilter, description, setDescription, tag, setTag, subject, setSubject, click, setClick }}>
      <SearchStudents></SearchStudents>
      <ShowStudents></ShowStudents>
    </StudentsContext.Provider>
  )
}

export default Students
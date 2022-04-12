import React, { useState, createContext } from "react";
import StudentsSearch from "./StudentsSearch";
import StudentsShow from "./StudentsShow";
import "../../assets/SearchStudents.css";

// CONTEXT
export const StudentsContext = createContext(["", ()=>{}]);

const Students = () => {
  
  // stany dzielone pomiędzy komponentami
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [subject, setSubject] = useState("");
  const [click, setClick] = useState(false);

  return (
    <StudentsContext.Provider
      value={{
        description,
        setDescription,
        tag,
        setTag,
        subject,
        setSubject,
        click,
        setClick,
      }}
    >
      <StudentsSearch />
      <StudentsShow />
    </StudentsContext.Provider>
  );
};

export default Students;

import React, { useState, createContext } from "react";


// CONTEXT
export const StudentContext = createContext(["", () => {}]);


// PROVIDER
export const StudentProvider = ({ children }) => {
  
  // stany dzielone pomiędzy komponentami
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [subject, setSubject] = useState("");
  const [click, setClick] = useState(false);

  return (
    <StudentContext.Provider
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
      {children}
    </StudentContext.Provider>
  );
};

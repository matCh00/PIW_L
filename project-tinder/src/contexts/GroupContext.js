import React, { useState, createContext } from "react";


// CONTEXT
export const GroupContext = createContext(["", () => {}]);


// PROVIDER
export const GroupProvider = ({ children }) => {
  
  // stany dzielone pomiędzy komponentami
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [click, setClick] = useState(false);

  return (
    <GroupContext.Provider
      value={{
        name,
        setName,
        members,
        setMembers,
        description,
        setDescription,
        subject,
        setSubject,
        click,
        setClick,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

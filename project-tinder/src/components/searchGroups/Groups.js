import React, { useState, createContext } from "react";
import GroupsSearch from "./GroupsSearch";
import GroupsShow from "./GroupsShow";
import "../../assets/SearchGroups.css";

// CONTEXT
export const GroupsContext = createContext(["", ()=>{}]);

const Groups = () => {
  
  // stany dzielone pomiędzy komponentami
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [click, setClick] = useState(false);

  return (
    <GroupsContext.Provider
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
      <GroupsSearch />
      <GroupsShow />
    </GroupsContext.Provider>
  );
};

export default Groups;
import React, { useContext } from "react";
import { GroupsContext } from "./Groups";

const GroupsSearch = () => {

  // stany przekazywane do innego komponentu
  const {setName, setMembers, setDescription, setSubject, click, setClick} = useContext(GroupsContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMembers = (e) => {
    setMembers(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const clicked = (e) => {
    setClick(!click);
  };


  return (
    <div className="searchGroups__container">
      <input
        id="grNameSearch"
        className="input inputOne searchGroups__input"
        type="text"
        onChange={handleName}
        spellCheck="false"
        placeholder="find by name..."
      />

      <input
        id="grMemSearch"
        className="input inputOne searchGroups__input"
        type="text"
        onChange={handleMembers}
        spellCheck="false"
        placeholder="find by members..."
      />

      <input
        id="grDescSearch"
        className="input inputOne searchGroups__input"
        type="text"
        onChange={handleDescription}
        spellCheck="false"
        placeholder="find by description..."
      />

      <input
        id="grSubjSearch"
        className="input inputOne searchGroups__input"
        type="text"
        onChange={handleSubject}
        spellCheck="false"
        placeholder="find by subject..."
      />

      <button
        name="filterGroupsButton"
        className="button buttonOne searchGroups__button"
        onClick={() => clicked()}
      >
        Filter
      </button>
    </div>
  );
};

export default GroupsSearch;
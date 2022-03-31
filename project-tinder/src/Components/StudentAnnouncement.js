import React, { useState } from "react";

const StudentAnnouncement = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([""]);
  const [subject, setSubject] = useState([""]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTags = (e) => {
    setTags(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("add student");
    document.getElementById("addNameStudent").value = "";
    document.getElementById("addEmailStudent").value = "";
    document.getElementById("addSubjectStudent").value = "";
    document.getElementById("addDescriptionStudent").value = "";
    document.getElementById("addTagsStudent").value = "";

    const user = {
      "name": name,
      "email": email,
      "description": description,
      "subject": subject.split(' '),
      "tags": tags.split(' ')
    };

    const res = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  };

  return (
    <div className="studentAnnouncement__container">
      <input
        id="addNameStudent"
        className="input inputTwo studentAnnouncement__input"
        type="text"
        onChange={handleName}
        spellCheck="false"
        placeholder="type name..."
      />

      <input
        id="addEmailStudent"
        className="input inputTwo studentAnnouncement__input"
        type="text"
        onChange={handleEmail}
        spellCheck="false"
        placeholder="type email..."
      />

      <input
        id="addDescriptionStudent"
        className="input inputTwo studentAnnouncement__input"
        type="text"
        onChange={handleDescription}
        spellCheck="false"
        placeholder="type description..."
      />

      <input
        id="addTagsStudent"
        className="input inputTwo studentAnnouncement__input"
        type="text"
        onChange={handleTags}
        spellCheck="false"
        placeholder="type tags separated by spaces..."
      />

      <input
        id="addSubjectStudent"
        className="input inputTwo studentAnnouncement__input"
        type="text"
        onChange={handleSubject}
        spellCheck="false"
        placeholder="type subjects separated by spaces..."
      />

      <button
        name="submitButton"
        className="button buttonTwo studentAnnouncement__button"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default StudentAnnouncement;

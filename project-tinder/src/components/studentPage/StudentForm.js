import React from "react";
import { Link } from "react-router-dom";
import chatting1 from "../../assets/images/chatting1.png";
import chatting2 from "../../assets/images/chatting2.png";
import "../../assets/StudentPage.css";


const StudentForm = (props) => {
  
  const student = props.student;

  return (
    <div
      className="studentForm__element"
      key={student.id + "_form"}
      id={student.id + "_form"}
    >
      <h1> {student.name} </h1>

      <h2> {student.email} </h2>

      {student.subject.map((c) => {
        return (
          <div className="studentForm__elementSubject" key={c}>
            <h2> {c} </h2>
          </div>
        );
      })}

      <h3> {student.description} </h3>

      {student.tags.map((t) => {
        return (
          <div className="studentForm__elementTags" key={t}>
            <h4> {t} </h4>
          </div>
        );
      })}

      <Link
        to={"/send-message/" + student.id}
        key={student.id}
        className="showGroups__elementLink"
        title="Send a message to this group"
      >
        <img
          src={chatting1}
          title="Send a message to this group"
          id="chattingIcon"
          onMouseOver={(e) => (e.currentTarget.src = chatting2)}
          onMouseOut={(e) => (e.currentTarget.src = chatting1)}
        ></img>
      </Link>
    </div>
  );
};

export default StudentForm;

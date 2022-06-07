import React, { useRef, useEffect } from "react";
import message_sent from "../../assets/images/message_sent.png";
import "../../assets/Message.css";


const Message = () => {
  
  // useState po zmianie renderuje stronę na nowo
  // useRef po zmianie nie ma potrzeby renderować strony na nowo
  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    console.log("sent message: ", messageRef.current.value);
    document.getElementById("typeMessage").value = "";
    document.getElementById("elementToAnimate").style.display = "";
    document.getElementById("elementToAnimate").style.animation =
      "myAnimation 2s forwards";
  };

  return (
    <div className="sendMessage__container">
      <textarea
        id="typeMessage"
        className="input sendMessage__input"
        type="text"
        ref={messageRef}
        spellCheck="false"
        placeholder="type message..."
      ></textarea>

      <button
        name="submitButton"
        className="button buttonTwo sendMessage__button"
        onClick={() => handleSubmit()}
      >
        Send
      </button>

      <div className="animation">
        <img
          src={message_sent}
          width="300"
          height="120"
          id="elementToAnimate"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Message;

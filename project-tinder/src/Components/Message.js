import React, { useState } from "react";
import message_sent from "../res/message_sent.png";

const Message = () => {

  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("sent message: ", message);
    document.getElementById("typeMessage").value = "";
    document.getElementById('elementToAnimate').style.display="";
    document.getElementById('elementToAnimate').style.animation="myAnimation 2s forwards";
  };

  return (
    <div className="sendMessage__container">
      <textarea 
        id="typeMessage" 
        className="input sendMessage__input" 
        type="text" 
        onChange={handleMessage} 
        spellCheck="false" 
        placeholder="type message...">
      </textarea>

      <button
        name="submitButton"
        className="button buttonTwo sendMessage__button"
        onClick={() => handleSubmit()}
      >
        Send
      </button>

      <div class="animation">
        <img src={message_sent} width="300" height="120" id="elementToAnimate" style={{"display": "none"}}/>
      </div>
    </div>
  );
};

export default Message;
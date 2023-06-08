import React from "react";
import "../CSS/MessageBox.css";

function MessageBox(props) {
  return (
    <div className={"message-box " + props.transform}>
      <a href={props.link}>
        <div className="centered-text">{props.text}</div>
      </a>
    </div>
  );
}

export default MessageBox;

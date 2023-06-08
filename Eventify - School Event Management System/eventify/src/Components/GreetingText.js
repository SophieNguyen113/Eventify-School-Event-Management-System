import React from "react";
import "../CSS/NavBarItem.css";

function GreetingText(props) {
    return(
        <div className="greeting-text">Hello {props.firstName}!</div>
    )
}

export default GreetingText;
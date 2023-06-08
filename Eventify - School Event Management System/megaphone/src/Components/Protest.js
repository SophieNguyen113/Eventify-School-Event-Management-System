import React from "react";
import "../CSS/Protest.css";

function Protest(props) {
    return (
        <div className="protest-container">
          <p className="protestTitle">{props.protestName}</p>
          <div>
          <p className="protestDateandLocation">{props.protestDate} {props.protestLocation}</p>
          <p className="protestInfo">{props.protestInfo}</p>
          <p className="protestTags">{props.protestTags}</p>
          </div>
        </div>
    );
}
export default Protest;
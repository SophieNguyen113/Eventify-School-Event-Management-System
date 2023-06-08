import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBarItem.css";

function NavBarItem(props) {
  return (
    <Link to={props.link} className="nav-link">
      <div className="nav-item">{props.name}</div>
    </Link>
  );
}

export default NavBarItem;

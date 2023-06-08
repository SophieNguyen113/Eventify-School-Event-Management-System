import React, {useState} from "react";
import NavBarItem from "./NavBarItem";
import GreetingText from "./GreetingText";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

function NavBar(props) {
  return (
    <div className="nav-background">
      <Link to="/">
        <div className="logo">
          <img
            className="icon"
            src={require("../Images/Icon.png")}
            alt="megaphone logo"
          />
          <img
            className="name"
            src={require("../Images/Name.png")}
            alt="megaphone logo"
          />
        </div>
      </Link>
      <div className="nav-links">
        <NavBarItem link="/search" name="Search" />
        <NavBarItem link="/about" name="About" />
        {props.firstName == "" ? <NavBarItem link="/signin" name="Sign In" /> :
          <div>
            <GreetingText firstName={props.firstName} />
            <button className="sign-out" onClick={() => signOut(props)}>Sign out</button>
          </div>}
      </div>
      <span className="summary">Let our voices be heard!</span>
    </div>
  );

  function signOut(props) {
    props.setUserData({
      firstName: "",
      lastName: "",
      username: "",
      joinedProtests: []
    })
  }
}

export default NavBar;

import { React, useState } from "react";
import NavBar from "../Components/NavBar";
import MessageBox from "../Components/MessageBox";
import "../CSS/Home.css";
import ButtonTest from "../Components/ButtonTest";
import QuoteGenerator from "../Components/QuoteGenerator";
import UserDatabaseTest from "../Components/UserDatabaseTest";

function Home(props) {
  return (
    <div className="background">
      <NavBar firstName={props.userData.firstName} setUserData={props.setUserData}/>
      {/* <UserDatabaseTest setUserData={props.setUserData}/> */}
      {/* <QuoteGenerator></QuoteGenerator> */}
      {/* <ButtonTest /> */}
      <div className="images">
        <div className="inline-block">
          <img
            className="label"
            src={require("../Images/Name.png")}
            alt="logo and megaphone"
          />
          <img
            className="logo"
            src={require("../Images/Icon.png")}
            alt="logo and megaphone"
          />
          <div className="messages">
            <MessageBox
              transform="rotate-up"
              link="search"
              text="Let me search for a protest!"
            ></MessageBox>
            <MessageBox
              transform="translate-right"
              link="signin"
              text="I want to start my own protest!"
            ></MessageBox>
            <MessageBox
              transform="rotate-down"
              link="search/advanced"
              text="Help me find a protest that interests me!"
            ></MessageBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

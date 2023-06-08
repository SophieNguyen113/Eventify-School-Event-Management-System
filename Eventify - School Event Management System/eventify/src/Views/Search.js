import { React, useState } from "react";
import NavBar from "../Components/NavBar";
import "../CSS/Search.css";
import Protest from "../Components/Protest";

function Search(props) {
  return (
    <div className="background">
      <NavBar firstName={props.userData.firstName}/>
      <div className="content-container">
        <h1 className= "title"> Search for Protests! </h1>
        <input className="search-bar" placeholder="Search"/>
        <div className="protest-holder">
          <Protest 
          protestName="Table Flippers United (╯°□°)╯︵ ┻━┻" 
          protestDate="4/20/2022" 
          protestLocation= "@ CULC Roof" 
          protestInfo = "Calling all table flippers! We need to assemble on April 20th to show the world how evil tables are, by flipping all the tables! Grab your friends, family and professors because it's gonna be a flippin' good time. If you get tased by GTPD, that's on you lmao. Free boba btw."
          protestTags = "#GeorgiaTech #StudentOrganized #MasksRequired"/>
          <Protest 
          protestName= "Theory Thread Abolitionists" 
          protestDate="02/23/2023" 
          protestLocation = "@ Binary Bridge"
          protestInfo = "Attention CS Majors! What thread sounds the most boring? Theory, right? Why does it even exist? No one even knows. If you're a CS major with the Theory thread, you probabaly just hate yourself. We should just get rid of it tbh. We could have a way cooler thread that'd probably be more useful, like a Showering or Going Outside thread. Join us so we can spread the message and abolish Theory at GT."
          protestTags = "#GeorgiaTech #VaccinationRequired" />
          <Protest protestName= "Free Stuff Society" 
          protestDate="09/30/2022" 
          protestLocation = "@ Tech Green"
          protestInfo = "Who doesn't like free stuff? Exactly, no one. That's why us Georgia Tech Students should band together and riot, so we can get free stuff from GT. We're looking at you President Cabrera."
          protestTags = "#GeorgiaTech #Violent?"/>
          <Protest protestName= "Table Unflippers Gather ┬─┬ノ( º □ ºノ)" 
          protestDate="4/20/2022" 
          protestLocation = "@ CULC Roof"
          protestInfo = "Tables are people too! There's a radical group of Table Flipping hooligans planning to flip tables off the CULC roof. Join us to put all these tables right side up, and restore rights for all tables. If you get punched by a Table Flipper that's on you lmao. Free donuts btw."
          protestTags = "#GeorgiaTech #StaffOrganized"/>
          <Protest protestName= "FROWN GT" 
          protestDate="08/20/2022" 
          protestLocation = "@ Callaway Plaza"
          protestInfo = "If there's a SMILE Georgia Tech, there should totally be a FROWN Georgia Tech. Join us to make GT students upset, and give out really ugly looking shirts, that we take back immedietly."
          protestTags = "#GeorgiaTech #StudentOrganized #AllDay"/>
          <Protest protestName= "Guy Fieri Fiesta" 
          protestDate="4/30/2022" 
          protestLocation = "@ Centennial Olympic Park"
          protestInfo = "Guy Fieri isn't appeciated nearly as much as he should be. Join us as we march through Centennial Olympic Park and shout 'FLAVOR TOWN' over and over and dye our hair blonde."
          protestTags = "#IndependentlyOrganized #MasksRequired #Morning"/>
        </div>
      </div>
    </div>
  );
}

export default Search;

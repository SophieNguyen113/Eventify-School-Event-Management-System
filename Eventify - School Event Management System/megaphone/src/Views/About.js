import { React, useState } from "react";
import NavBar from "../Components/NavBar";
import '../CSS/About.css'
import ContactCard from '../Components/ContactCard'

function About(props) {
    return (
        <div>
            <NavBar firstName={props.userData.firstName}/>
            <h1 className="header">
            Every great project has an even better team behind it. Here's the team behind Megaphone!
            </h1> 
            <div className="cards">
                <ContactCard className="contact-card" name="Jinwoo" description="Third year computer science student" email="jpark955@gatech.edu" role="Project Manager"/>
                <ContactCard className="contact-card" name="Josh" description="First year computer science student" email="jsamuel36@gatech.edu" role="Developer"/>
                <ContactCard className="contact-card" name="Serene" description="Second year computer science student" email="sereneby02@gmail.com" role="Developer"/>
                <ContactCard className="contact-card" name="Hai" description="Second year computer science student" email="haixdao1@gmail.com" role="Developer"/>
                <ContactCard className="contact-card" name="Anh" description="Second year computer science student" email="jlk060801@gmail.com" role="Developer"/>
            </div>
        </div>
    )
}

export default About
import React, { useEffect, useState } from 'react'
import jin_pic from "../pictures/jin.jpg"
import josh_pic from "../pictures/josh.png"
import hai_pic from "../pictures/hai.jpg"
import serene_pic from "../pictures/serene.jpg"
import anh_pic from "../pictures/anh.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Contact.css'
import { set } from 'react-hook-form'

function ContactCard(props) {
    let [pic, setPic] = useState()
    let [leftMargin, setLeftMargin] = useState({marginLeft: "0px"})
    useEffect(() => {
        switch(props.name) {
            case "Jinwoo" : 
                setPic(jin_pic)
                setLeftMargin({marginLeft: "-30%"})
                break
            case "Josh" : 
                setPic(josh_pic)
                setLeftMargin({transform: "scale(2.2)", marginLeft:"25px", marginTop: "-17px"})
                break
            case "Serene" : 
                setPic(serene_pic)
                setLeftMargin({transform: "scale(1.25)", marginLeft: "10%", marginTop: "10%"})
                break
            case "Hai" : 
                setPic(hai_pic)
                break
            case "Anh" : 
                setPic(anh_pic)
                break
            default:
        }
    }, [props.name]);

    return(
        <div className="card">
            <div className="img-crop">
                <img src={pic} alt={`profile of ${props.name}`} className="profile-pic" style={leftMargin}></img>
            </div>
            <div className="profile-info">
                <h2>{props.name}</h2>
                <label className="role">{props.role}</label>
                <label className="description">{props.description}</label>
                <a className="email-link" href = {`mailto:${props.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} className="env"/>
                    <label className="email">{props.email}</label>
                </a>
            </div>
        </div>
    )
}

export default ContactCard
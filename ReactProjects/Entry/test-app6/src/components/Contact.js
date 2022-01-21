import React from "react";
import phone1 from "../images/phone-icon.jpg";
import mail1 from "../images/main-icon.png";
import "../index.css";


export default function Contact(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.src} alt="cat" />
            <h3> {props.name}</h3>
            <div className="contact-info">
                <img src={phone1} alt="phone" />
                <p> {props.phone}</p>
            </div>
            <div className="contact-info">
                <img src={mail1} alt="" />
                <p> {props.mail}</p>
            </div>
        </div>
    )
}
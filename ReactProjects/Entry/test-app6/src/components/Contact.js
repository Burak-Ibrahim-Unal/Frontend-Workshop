import React from "react";
import phone1 from "../images/phone-icon.jpg";
import mail1 from "../images/main-icon.png";
import "../index.css";


//V1
// export default function Contact(props) {
//     console.log(props);
//     return (
//         <div className="contact-card">
//             <img src={props.src} alt="cat" />
//             <h3> {props.name}</h3>
//             <div className="contact-info">
//                 <img src={phone1} alt="phone" />
//                 <p> {props.phone}</p>
//             </div>
//             <div className="contact-info">
//                 <img src={mail1} alt="" />
//                 <p> {props.mail}</p>
//             </div>
//         </div>
//     )
// }


export default function Contact({src, name, phone, mail}) {
    return (
        <div className="contact-card">
            <img src={src} alt="cat" />
            <h3> {name}</h3>
            <div className="contact-info">
                <img src={phone1} alt="phone" />
                <p> {phone}</p>
            </div>
            <div className="contact-info">
                <img src={mail1} alt="" />
                <p> {mail}</p>
            </div>
        </div>
    )
}
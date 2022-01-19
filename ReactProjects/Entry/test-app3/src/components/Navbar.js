import React from "react";
import "../index.css";
import navLogo from "../images/react-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img className="navLogo" src={navLogo} alt="react-logo"/>
            <h3 className="navLogoText">Logo Text</h3>
            <h4 className="navRightMenuText">Right Menu</h4>
        </nav>
    );
}

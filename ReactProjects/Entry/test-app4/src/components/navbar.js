import React from "react";
import githubLogo from "../images/github2.png";
import "../index.css";

export default function Navbar(){
    return(
        <nav>
            <img className="navImage" src={githubLogo} alt="github-logo" />
        </nav>
    )
}
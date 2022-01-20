import React from "react";
import "../index.css";
import logo from "../images/react-logo.png";

export default function Main() {
    return (
        <main className="fontInter400">
            <h1 className="mainH1"> All options listed above</h1>
            <ul className="ulMain fontInter600">
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
                <li>option 4</li>
                <li>option 5</li>
            </ul>
        </main>

    );
}

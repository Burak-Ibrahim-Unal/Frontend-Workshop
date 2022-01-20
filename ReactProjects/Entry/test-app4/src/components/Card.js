import React from "react";
import boy1 from "../images/boy1.jpg";
import star1 from "../images/star1.jpg";


export default function Card() {
    return (
        <div className="card">
            <img className="cardImage" src={boy1} alt="boy1" />
            <div className="cardStats">
                <img className="card-star" src={star1} alt="star" />
                <span>9.8</span>
                <span className="grayText">(12)• </span>
                <span className="grayText"> &nbsp; Turkey</span>
            </div>
            <p><span className="bold">Lorem</span>,  ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempora? Temporibus velit quae inventore atque! Architecto, ut sequi et quo ab itaque ea doloribus est.</p>
        </div>
    )
}
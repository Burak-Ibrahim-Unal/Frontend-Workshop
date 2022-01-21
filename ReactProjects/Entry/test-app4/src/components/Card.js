import React from "react";
import boy1 from "../images/boy1.jpg";
import star1 from "../images/star1.jpg";


export default function Card(props) {
    console.log(props.img);
    return (
        <div className="card">
            <img className="cardImage" src={props.img} alt="boy1" />
            <div className="cardStats">
                <img className="card-star" src={star1} alt="star" />
                <span>{props.rating}</span>
                <span className="grayText">({props.reviewCount})• </span>
                <span className="grayText"> &nbsp; {props.country}</span>
            </div>
            <p><span className="bold">{props.price} $</span>,  ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempora? Temporibus velit quae inventore atque! Architecto, ut sequi et quo ab itaque ea doloribus est.</p>
        </div>
    )
}
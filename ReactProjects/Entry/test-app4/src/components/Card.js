import React from "react";
import star1 from "../images/star1.jpg";


export default function Card(props) {
    console.log(props);
     return (
        <div className="card">
            <img className="cardImage" src={props.img} alt={props.img} />
            <div className="cardStats">
                <img className="card-star" src={star1} alt="star" />
                <span>{props.rating}</span>
                <span className="grayText">({props.reviewCount})• </span>
                <span className="grayText"> &nbsp; {props.country}</span>
            </div>
            <p><span className="bold">{props.price} $</span>,  ipsum dolor sit amet consectetur adipisicing.</p>
            <p>{props.description}</p>
        </div>
    )
}
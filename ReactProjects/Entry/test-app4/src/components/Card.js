import React from "react";
import star1 from "../images/star1.jpg";


export default function Card(props) {
    let badgeText;
    if (props.spots === 0) {
        badgeText = "Sold Out";
    } else if (props.location === "Online") {
        badgeText = "On Sale";
    }


    console.log(props);
    return (
        <div className="card">
            {badgeText && <div className="cardBadge"> {badgeText}</div>}
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
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    let keyValue=1;
    const cards = data.map((card) => {
        return (
            <div key={keyValue++}>
                <Card
                    key={card.id}               
                    img={card.cover}
                    rating={card.stats.rating}
                    reviewCount={card.stats.review}
                    country={card.location}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                />
            </div>
        );
    });

    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            {cards}
        </div>
    )
}

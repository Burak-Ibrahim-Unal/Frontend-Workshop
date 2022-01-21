import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import boy1 from "./images/boy1.jpg";


export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card 
                img={boy1}
                rating="4.9"
                reviewCount={6}
                country="Turkey" 
                title="Little Boys at Arena"
                price={40}
            />
        </div>
    );
}

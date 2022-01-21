import React from "react";
import Contact from "./components/Contact";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";


export default function App() {
    return (
        <div className="contact">
            <Contact
                img src={cat1} alt="cat1"
                name="Cat 1"
                phone="(012) 3456789"
                email="cat1@cat1.com"
            />
            <Contact
                img src={cat2} alt="cat2"
                name="Cat 2"
                phone="(012) 3456789"
                email="cat2@cat2.com"
            />
            <Contact
                img src={cat3}  alt="cat3"
                name="Cat 3"
                phone="(012) 3456789"
                email="cat3@cat3.com"
            />
            <Contact
                img src={cat4}  alt="cat4"
                name="Cat 4"
                phone="(012) 3456789"
                email="cat4@cat4.com"
            />
        </div>
    )
}

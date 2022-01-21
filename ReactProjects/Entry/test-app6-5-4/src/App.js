import React from "react";
import Joke from "./Joke";


export default function App() {
    return (

        <div>
            <h1>App H1</h1>

            <Joke
                setup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia 0"
            />
            <Joke

                testProp="Lorem, ipsum dolor.1"
            />

            <Joke
                setup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia 2"
                testProp="Lorem, ipsum dolor.2"
            />
            <Joke
                setup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia 3"
                testProp="Lorem, ipsum dolor.3"
            />
            <Joke
                setup="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia 4"
                testProp="Lorem, ipsum dolor.4"
            />

        </div>


    );
}
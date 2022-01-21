import React from "react";
import ReactDOM from "react-dom";

function App() {
    const name = "Burak";
    const surName = "Unal";
    const date = new Date();
    let todayName;

    if (date.getDay() === 0) todayName ="Today is Sunday"
    else if (date.getDay() === 1) todayName ="Today is Monday"
    else if (date.getDay() === 2) todayName ="Today is Tuesday"
    else if (date.getDay() === 3) todayName ="Today is Wednesday"
    else if (date.getDay() === 4) todayName ="Today is Thursday"
    else if (date.getDay() === 5) todayName ="Today is Friday"
    else todayName ="Today is Saturday"
    


    return (
        <div>
            <h1>{`${name}  ${surName}`}</h1>
            <h1> Hello {name} {surName}</h1>
            <p>{date.toLocaleDateString()}</p>
            {console.log(`Today is ${date.getDay()}th day of week ${todayName}`)}


        </div>

    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)
import React from "react";


export default function Joke(props) {
    console.log(props);
    return (
        <div>
            <h2 style={{ display: props.setup ? "block" : "none" }}>"props.setup value:" {props.setup}</h2> {/* Version1 */}
            {props.testProp && <p>"props.testProp value:" {props.testProp}</p>} {/* Version2 */}
            <hr />
        </div>
    )
}
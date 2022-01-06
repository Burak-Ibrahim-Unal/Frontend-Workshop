import React from "react";
import ReactDOM from "react-dom";

// if (module.hot) {
//     module.hot.accept();
// }


const App = () => {
    return (
        <div>
            <label class="label" for="name">Name</label>
            <input type="text" name="name" />
            <button style={{ backgroundColor: "blue",color:"white" }}> Submit</button>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
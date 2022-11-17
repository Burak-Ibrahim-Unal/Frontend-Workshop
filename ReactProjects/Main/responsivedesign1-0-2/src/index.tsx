import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/sytles.css";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import { store, StoreContext } from "./app/stores/store";
import { Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById("root")
);

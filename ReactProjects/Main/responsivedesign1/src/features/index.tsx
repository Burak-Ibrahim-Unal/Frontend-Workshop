import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/sytles.css';
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Router } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css";
import { createBrowserHistory } from 'history';
import { StoreContext } from '../app/stores/store';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);


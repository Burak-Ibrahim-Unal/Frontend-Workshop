import React from 'react';
// import logo from './logo.svg';
import "../layout/sytles.css";
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
    </>
  );
}

export default App;

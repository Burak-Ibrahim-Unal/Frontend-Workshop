import React from "react";
import "./App.css";
import BarChartBar from "./components/BarChartBar";
import BarChartLine from "./components/BarChartLine";
import BarChartPie from "./components/BarChartPie";
import BarChartDoughnut from "./components/BarChartDoughnut";
import BarChartRadar from "./components/BarChartRadar";
import BarChartBarV2 from "./components/BarChartBar_v2";

// import PlotlyBar from './components/BarChartBar';

const App = () => {
  return (
    <div className="App">
      <BarChartBar /> <hr className="HrLine" />
      <hr className="AddionalHr" />
      <BarChartBarV2 /> <hr className="HrLine" />
      <hr className="AddionalHr" />
      <BarChartLine /> <hr className="HrLine" />
      <hr className="AddionalHr" />
      <BarChartPie /> <hr className="HrLine" />
      <hr className="AddionalHr" />
      <BarChartDoughnut /> <hr className="HrLine" />
      <hr className="AddionalHr" />
      <BarChartRadar /> <hr className="HrLine" />
      {/* <PlotlyBar /> */}
    </div>
  );
};

export default App;

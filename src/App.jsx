import React from "react";
import "./App.css";
import BarChart from "./Bar";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function App() {
  return (
    <div className="min-h-screen min-w-screen p-3">
      <BarChart />
      <LineChart />
      <PieChart />
    </div>
  );
}

export default App;

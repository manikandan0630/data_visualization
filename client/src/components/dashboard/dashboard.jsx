import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Doughnut from "../charts/Doughnut";
const Dashboard = () => {
  return (
    <div className="flex  flex-col ">
      <LineChart />
      <div className="flex flex-row justify-center gap-4 w-full">
        <BarChart />
        <Doughnut />
      </div>
    </div>
  );
};

export default Dashboard;

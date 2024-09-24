import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import Header from "../header/Header";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import Doughnut from "../charts/Doughnut";
const Dashboard = () => {
  return (
    <div className="">
      <Header />
      
        <div className="flex  flex-col  ">
          <LineChart />
          <div className="flex flex-row justify-center gap-4 w-full my-5">
            <BarChart />
            <Doughnut />
          </div>
        
      </div>
    </div>
  );
};

export default Dashboard;

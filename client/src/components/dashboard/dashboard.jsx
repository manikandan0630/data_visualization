import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import LineChart from "../charts/LineChart"
import { Bar, Doughnut } from "react-chartjs-2";
import Data from "../../data/source.json";
import revenuData from "../../data/revenue.json";

const Dashboard = () => {

  return (
    <div className="flex  flex-col ">
      <LineChart />
     
     
     
      <div className="flex flex-row justify-center gap-4 w-full">
        <div className="w-2/5 bg-white ">
          <Bar
            data={{
              labels: Data.map((ele) => ele.label),
              datasets: [
                {
                  label: "count",

                  data: Data.map((ele) => ele.value),
                  backgroundColor: [
                    "rgba(43,63,220,0.8)",
                    "rgba(250,192,19,0.8)",
                    "rgba(253,135,135,0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
        <div className="w-2/5 bg-white  ">
          <Doughnut
            data={{
              labels: Data.map((ele) => ele.label),
              datasets: [
                {
                  label: "count",

                  data: Data.map((ele) => ele.value),
                  backgroundColor: [
                    "rgba(43,63,220,0.8)",
                    "rgba(250,192,19,0.8)",
                    "rgba(253,135,135,0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
function LineChart() {
  const [revenuData,setRevenueData]=useState([])
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/line")
      .then((res) => setRevenueData(res.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div className="w-2/4 mx-auto mt-32 px-8 py-5 rounded-sm bg-white">
      <h1 className="text-center font-bold pb-4">Line Chart</h1>
        <Line
          data={{
            labels: revenuData.map((ele) => ele.label),
            datasets: [
              {
                label: "Revenue",
                data: revenuData.map((ele) => ele.revenue),
                backgroundColor: "#41BEF4",
                borderColor: "#064ff0",
              },
              {
                label: "cost",
                data: revenuData.map((ele) => ele.cost),
                backgroundColor: "#ADE9C5",
                borderColor: "#ff3030",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default LineChart;

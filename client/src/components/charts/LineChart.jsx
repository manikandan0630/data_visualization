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
      <div className="w-2/4 mx-auto my-10 px-8 py-5 bg-white">
        <Line
          data={{
            labels: revenuData.map((ele) => ele.label),
            datasets: [
              {
                label: "Revenue",
                data: revenuData.map((ele) => ele.revenue),
                backgroundColor: "#064ff0",
                borderColor: "#064ff0",
              },
              {
                label: "cost",
                data: revenuData.map((ele) => ele.cost),
                backgroundColor: "#ff3030",
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

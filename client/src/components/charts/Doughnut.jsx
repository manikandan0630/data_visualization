import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const DoughnutRound = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/doughnut")
      .then((res) => setData(res.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-2/5 bg-white rounded-sm  pb-5 px-10">
      <h1 className="text-center font-bold py-3"> Doughnut</h1>
      <Doughnut
        data={{
          labels: data.map((ele) => ele.label),
          datasets: [
            {
              label: "count",

              data: data.map((ele) => ele.value),
              backgroundColor: [
                "#00C086",
                "#3A96FF",
                "#FFDC69",
              ],
              borderRadius: 5,
              
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutRound;

import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
const BarChart = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/api/barchart").then((res)=>setData(res.data.data))
    },[])
  return (
    <div className="w-2/5 bg-white rounded-sm px-4  ">
        <h1 className="text-center font-bold py-3"> BarChart</h1>
          <Bar className='mt-36'
            data={{
              labels: data.map((ele) => ele.label),
              datasets: [
                {
                  label: "count",

                  data: data.map((ele) => ele.value),
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
  )
}

export default BarChart
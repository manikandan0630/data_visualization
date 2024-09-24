const express = require("express");
const LineModel = require("../models/DashboardModel");
const BarChartModel=require("../models/BarChartModel")
//Line chart data fetching

const LineChart = async (req, res) => {
  try {
    const data = await LineModel.find({});
    // console.log(data)
    if (data) {
      res.json({
        data:data,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};


//bar chart

const BarChart=async(req,res)=>{
    try {
        const data=await BarChartModel.find({})
        if(data){
            res.json({
                data:data
            })
        }
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}


//DoughNut 


module.exports={
    LineChart,
    BarChart,
}
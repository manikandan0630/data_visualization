const express = require("express");
const LineModel = require("../models/DashboardModel");
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

module.exports={
    LineChart,
}
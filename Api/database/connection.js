const mongoose = require("mongoose");
require("dotenv").config();

//connection function

const getConnection = async (req, res) => {
  try {
    const connect = await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Database connected"));
    if(connect){
        res.json({
            messsage:"true"
        })
    }
  } catch (error) {}
};

module.exports = getConnection;

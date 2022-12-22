const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = 8000;

// Connect mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Succesfully connected to mongoDB 🎉");
  })
  .catch((err) => {
    console.log(err);
  });

// API
app.post("/resister", (req, res) => {
  try {
    const password = req.body.password;
    
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Server is running 🚀");
});

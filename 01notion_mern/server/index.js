const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = 8000;


// cors
app.use(cors({
  origin: "",
  
}))

// middleware
app.use(express.json());

// Connect mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Succesfully connected to mongoDB 🎉");
  })
  .catch((err) => {
    console.log(err);
  });

// Endpoint
app.use("/api/v1", require("./src/v1/routes/auth"));

// Server check
app.listen(PORT, () => {
  console.log("Server is running 🚀");
});

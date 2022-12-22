const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv').config()
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("App")
})

// Connect mongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Succesfully connected to mongoDB 🎉")
}).catch((err) => {
  console.log(err)
})

app.listen(PORT, () => {
  console.log("Server is running 🚀");
});


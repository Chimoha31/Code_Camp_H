const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const CryptoJs = require("crypto-js");
const JWT = require("jsonwebtoken");
const app = express();
const PORT = 8000;

// models
const User = require("./src/v1/models/user");


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
app.post("/resister", async (req, res) => {
  // passwordの受け取り
  const password = req.body.password;
  try {
    // passwordの暗号化
    req.body.password = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY);
    // Userの新規登録
    const user = await User.create(req.body);
    // JWTの発行
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Server is running 🚀");
});

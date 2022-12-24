const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
// models
const User = require("../models/user");

exports.resister = async (req, res) => {
  // passwordの受け取り
  const password = req.body.password;
  try {
    // passwordの暗号化
    req.body.password = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY);
    // Userの新規登録
    const user = await User.create(req.body);
    // JWTの発行
    const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

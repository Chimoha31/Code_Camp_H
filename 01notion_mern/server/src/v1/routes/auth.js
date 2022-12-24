const router = require("express").Router();
const CryptoJS = require("crypto-js");
const { body, validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");
require("dotenv").config();
// models
const User = require("../models/user");

// API
router.post(
  "/resister",
  // Validation check
  body("username")
    .isLength({ min: 6 })
    .withMessage("Username must have more than 6 letters"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must have more than 5 letters or numbers"),
  body("confirmPassword")
    .isLength({ min: 5 })
    .withMessage("Not match your Password"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("This username is already used");
      }
    });
  }),
  // Validationに関してのerrorを返す
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  async (req, res) => {
    // passwordの受け取り
    const password = req.body.password;
    try {
      // passwordの暗号化
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      );
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
  }
);

module.exports = router;

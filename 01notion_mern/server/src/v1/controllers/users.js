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

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // DBからuserが存在するか探してくる
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({
        errors: {
          param: "username",
          message: "Thare is no user.",
        },
      });
    }
    // Passwordが合っているか照合する(複合するときはdecrypt())
    const decreptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    if (decreptedPassword !== password) {
      return res.status(401).json({
        errors: [
          {
            params: "password",
            message: "There is no match password",
          },
        ],
      });
    }
    user.password = undefined;

    // JWTの発行
    const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(201).json({user, token});
  } catch (err) {
    return res.status(500).json(err);
  }
};

const router = require("express").Router();

// API
router.post("/resister", async (req, res) => {
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

module.exports = router;
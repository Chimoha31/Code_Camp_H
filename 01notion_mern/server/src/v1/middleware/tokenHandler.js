const JWT = require("jsonwebtoken");
const User = require("../models/user")

//----------------------------------------------
//①Tokenをdecodeする為の関数を用意
// Clientから渡ってきたTokenが正常かチェックしたいから
//----------------------------------------------
const tokenDecode = (req) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ")[1];
    // console.log(bearer);
    try {
      const decodedToken = JWT.verify(bearer, process.env.TOKEN_SECRET_KEY);
      return decodedToken;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};

//----------------------------------------------
// ②JWTを検証する為のmiddlewareを作成(token版のValidationチェック)
// 以前登録してloginしているかチェックしたいから
//----------------------------------------------
exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if(tokenDecoded) {
    //もしtokenDecodedが存在するのであれば、そのJWTと一致するユーザーを探してくる
    const user = await User.findById(tokenDecoded.id)
    if(!user) {
      return res.status(401).json("There is no authorization01.")
    }
    req.user = user;
    // Middlewareではnext()を最後に付ける。ここで正常に走ったら、次の(req, res)が走る。
    next()
  }else{
    return res.status(401).json("There is no authorization02.")
  }
};

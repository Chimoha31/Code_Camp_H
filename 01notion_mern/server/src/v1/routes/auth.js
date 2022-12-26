const router = require("express").Router();
const User = require("../models/user");
const { body } = require("express-validator");
const userController = require("../controllers/users");
const validation = require("../middleware/validation");

// Resister API
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
  validation.validate,
  userController.resister
);

// Login API
router.post(
  "/login",
  body("username").isLength({ min: 6 }).withMessage(""),
  body("password").isLength({ min: 5 }).withMessage(""),
  validation.validate,
  userController.login
);

// JWT Authentication API

module.exports = router;

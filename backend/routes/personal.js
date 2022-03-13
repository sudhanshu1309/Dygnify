const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { saveUser } = require("../controllers/personal");

router.post(
  "/saveUser",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("First Name should be atleast 3 char long"),
    check("mobNo").isLength({ min: 10 }).withMessage("Incomplete Mobile No."),
  ],
  saveUser
);

module.exports = router;

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { saveLoan } = require("../controllers/loan");

router.post(
  "/saveLoan",
  [
    check("loanNo").isLength({ min: 1 }).withMessage("Loan No is required!"),
    check("loanAmount")
      .isLength({ min: 1 })
      .withMessage("Loan Amount is required!"),
    check("intRate")
      .isLength({ min: 1 })
      .withMessage("Interest Rate is required!"),
  ],
  saveLoan
);

module.exports = router;

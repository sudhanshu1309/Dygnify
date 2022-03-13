const express = require("express");
const router = express.Router();
const { saveBusiness } = require("../controllers/business");
const { check } = require("express-validator");

router.post(
  "/saveBusiness",
  [
    check("businessName").isLength({ min: 3 }).withMessage("Business Name min 3 char"),
    check("gstNo").isLength({ min: 15 }).withMessage("Incomplete GST No."),
  ],
  saveBusiness
);

module.exports = router;

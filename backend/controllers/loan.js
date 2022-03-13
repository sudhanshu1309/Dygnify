const { validationResult } = require("express-validator");
const Loan = require("../models/loan");

exports.saveLoan = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      parameter: errors.array()[0].param,
    });
  }
  const loan = new Loan(req.body);
  loan.save((err, loan) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save loan details in database",
      });
    }
    return res.status(200).json({
      message: "Saved successfully!",
    });
  });
};

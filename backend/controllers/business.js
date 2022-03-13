const Business = require("../models/business");
const { validationResult } = require("express-validator");

exports.saveBusiness = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      parameter: errors.array()[0].param,
    });
  }
  const business = new Business(req.body);
  business.save((err, business) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save business details in database",
      });
    }
    return res.status(200).json({
      message: "Saved successfully!",
    });
  });
};

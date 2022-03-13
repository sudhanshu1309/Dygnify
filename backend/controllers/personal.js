const { validationResult } = require("express-validator");
const User = require("../models/personal");

exports.saveUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      parameter: errors.array()[0].param,
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save user details in database",
      });
    }
    return res.status(200).json({
      message: "Saved successfully!",
    });
  });
};

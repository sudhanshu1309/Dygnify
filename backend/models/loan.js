const mongoose = require("mongoose");
const { Schema } = mongoose;

const loanSchema = new Schema({
  loanNo: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  intRate: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Date,
  },
});

module.exports = mongoose.model("Loan", loanSchema);

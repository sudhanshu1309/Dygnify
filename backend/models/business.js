const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessSchema = new Schema({
  businessName: {
    type: String,
    maxlength: 50,
    required: true,
    trim: true,
  },
  gstNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    maxlength: 50,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Business", businessSchema);

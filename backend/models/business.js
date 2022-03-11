const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessSchema = new Schema({
  businessName: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  gstNo: {
    type: Number,
  },
  address: {
    type: String,
    maxlength: 50,
    trim: true,
  },
});

module.exports = mongoose.model("Business", businessSchema);

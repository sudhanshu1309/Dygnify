const mongoose = require("mongoose");
const { Schema } = mongoose;

const personalSchema = new Schema({
  firstName: {
    type: String,
    maxlength: 32,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  age: {
    type: Number,
  },
  mobNo: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("User", personalSchema);

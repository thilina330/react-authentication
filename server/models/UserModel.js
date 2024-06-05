const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },

  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userschema);

module.exports = User;

const mongoose = require("mongoose");

adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

const mongoose = require("mongoose");

jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  jobSpace: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;

const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  name: String,
  email: String,
  coverLetter: String,
});

module.exports = mongoose.model("Application", applicationSchema);

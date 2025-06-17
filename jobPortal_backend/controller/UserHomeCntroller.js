const Jobs = require("../model/Job");
const Application = require("../model/Application");

exports.getUserAllJobs = async (req, res) => {
  try {
    const Job = await Jobs.find().select("-adminName -jobSpace");

    if (!Job) {
      return res.status(400).json({ message: "Jobs not found in database." });
    }

    res.status(200).json(Job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs." });
  }
};

exports.submitApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { name, email, coverLetter } = req.body;

    if (!name || !email || !coverLetter) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newApplication = new Application({
      jobId,
      name,
      email,
      coverLetter,
    });

    await newApplication.save();

    res.status(201).json({ message: "Application submitted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting application.", error: error.message });
  }
};

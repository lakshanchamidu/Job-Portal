const Job = require("../model/Job");

exports.addNewJob = async (req, res) => {
  const { jobTitle, company, salary, description, adminName, jobSpace } =
    req.body;

  if (
    !jobTitle ||
    !company ||
    !salary ||
    !description ||
    !adminName ||
    !jobSpace
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const newJob = new Job({
    jobTitle,
    company,
    salary,
    description,
    adminName,
    jobSpace,
  });
  await newJob.save();
  res.status(201).json({ message: "New job added." });
};

exports.getAllJob = async (req, res) => {
  try {
    const AllJobs = await Job.find();
    if (!AllJobs) res.status(400).json({ message: "No jobs in database." });
    res.status(200).json(AllJobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

exports.getJobByName = async (req, res) => {
  try {
    const { adminName } = req.body;

    const Jobs = await Job.find({ adminName });

    if (!Jobs) res.status(400).json({ message: "No jobs in database." });

    res.status(200).json(Jobs);
  } catch (error) {
    res.status(400).json({ message: "Error fetching Jobs." });
  }
};
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const RemoveJob = await Job.findByIdAndDelete(id);
    if (!RemoveJob) {
      return res.status(404).json({ message: "Job not found." });
    }

    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting job. " });
  }
};

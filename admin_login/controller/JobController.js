const Job = require("../model/Job");

const addJob = async (req, res) => {
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

module.exports = { addJob };

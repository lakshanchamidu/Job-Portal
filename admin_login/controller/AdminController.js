const Admin = require("../model/Admin");

const createAdmin = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ message: "All fields are required." });
  const newAdmin = new Admin({ name, email });
  await newAdmin.save();
  res.status(201).json({ message: "New admin created." });
};

module.exports = { createAdmin };

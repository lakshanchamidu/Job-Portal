const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");

const createAdmin = async (req, res) => {
  const { adminname, email, company, password } = req.body;
  try {
    if (!adminname || !email || !company || !password)
      return res.status(400).json({ message: "All fields are required." });

    const alreadyAdmin = await Admin.findOne({ email });

    if (alreadyAdmin)
      return res.status(400).json({ message: "Already registerd this email." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      adminname,
      email,
      company,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "New admin created." });
  } catch (error) {
    res.status(500).json({ message: "Server Error." });
  }
};

module.exports = { createAdmin };

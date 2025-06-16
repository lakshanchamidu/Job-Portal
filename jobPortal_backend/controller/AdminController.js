const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {
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

exports.getAllAdmins = async (req, res) => {
  try {
    const Admins = await Admin.find().select("-password");
    res.status(200).json(Admins);
  } catch (error) {
    res.status(400).json({ message: "Server error" });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(401).json({ message: "All fields are required." });

    const admin = await Admin.findOne({ email });

    if (!admin) return res.status(400).json({ message: "Admin not found!" });

    const isMatchPassword = await bcrypt.compare(password, admin.password);

    if (!isMatchPassword)
      return res.status(401).json({ message: "Password is incorrect." });

    res.status(200).json({
      message: "Successfully Login Admin.",
      admin: {
        admin_Name: admin.adminname,
        company: admin.company,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

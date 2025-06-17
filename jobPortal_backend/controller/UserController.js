const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      res.status(400).json({ message: "All fields are required." });

    const alreadyUser = await User.findOne({ email });

    if (alreadyUser)
      res
        .status(400)
        .json({ message: "You already creted account using this email." });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({ message: "User Created Successfully." });

    await newUser.save();
  } catch (error) {
    res.status(400).json({ message: "Error creating user." });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find().select("-password");

    if (!Users) res.status(400).json({ message: "No Users in database." });

    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({ message: "Error fetching users." });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const Users = await User.findById(id).select("-password");

    if (!Users)
      resizeTo.status(400).json({ message: "User not found in database." });

    res.status(200).json({
      user: {
        User_Name: Users.name,
        Email: Users.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Error fetching user details." });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      res.status(400).json({ message: "All fields are required." });

    const UserLog = await User.findOne({ email });

    if (!UserLog)
      res.status(400).json({ message: "User Not found in database." });

    const isMatchedPassword = await bcrypt.compare(password, UserLog.password);

    if (!isMatchedPassword)
      res.status(400).json({ message: "Invalid password." });

    res.status(200).json({ message: "User login successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error user login." });
    console.log(error);
  }
};

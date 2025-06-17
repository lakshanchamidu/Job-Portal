const User = require("../model/User");
const user = require("../model/User");
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
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({ message: "Error fetching users." });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const Users = await User.findById(id).select("-password");
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

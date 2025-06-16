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

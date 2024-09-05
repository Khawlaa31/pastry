const { User } = require("../models");

const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
module.exports = {
  signup,
};

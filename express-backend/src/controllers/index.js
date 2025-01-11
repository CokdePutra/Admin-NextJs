const User = require('../models/index'); // Assuming you have a User model defined

const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch users from the database
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body; // Assuming these fields are in the request body
  try {
    const newUser = new User({ name, email });
    await newUser.save(); // Save the new user to the database
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = {
  getUsers,
  createUser,
};
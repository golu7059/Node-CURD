import User from "../model/userModel.js";

export const home = (req, res) => {
  res.send("Hello! This is the home page.");
};

export const about = (req, res) => {
  res.send("Hello! This is the about page.");
};

export const contact = (req, res) => {
  res.send("Hello! This is the contact page.");
};

export const createUser = async (req, res) => {
  console.log("Request received with body:", req.body); // Log the request body
  try {
    const { name, email, password, userName, age } = req.body; // received data from the body

    if (!name || !email || !password || !userName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      userName,
      age,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("Unable to save data into database!", error);
    res.status(501).json({
      success: false,
      message: "Unable to save user data!",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log("Unable to retrive data from database!", error);
    res.status(501).json({
      success: false,
      message: "Unable to get user data!",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully .",
    });
  } catch (error) {
    console.log("Unable to delete data from database!", error);
    res.status(501).json({
      success: false,
      message: "Unable to delete user data!",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body; // Get updated data from request body

    const user = await User.findByIdAndUpdate(userId, updatedData);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      user,
    });
  } catch (error) {
    console.log("Unable to update", error);
    res.status(500).json({
      success: false,
      message: "Not updated",
    });
  }
};

export const findUser = async (req, res) => {
  try {
    const userId = req.params.id; // Use req.params.id to get userId from route parameter
    const user = await User.findById(userId); // Use findById to find the user by _id

    if (!user) {
      // If user is not found, handle accordingly
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // If user is found, send success response with user data
    res.status(200).json({
      success: true,
      message: "User found",
      user,
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const User = require("../models/UserModel");
const createError = require("../utills/appError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER USER
exports.signup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(new createError("User with this email already exists!", 400));
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = jwt.sign(
      { _id: newUser._id },
      process.env.JWT_SECRET || "secretkey123",
      {
        expiresIn: "90d",
      }
    );

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      const duplicatedField = Object.keys(error.keyPattern)[0];
      return next(
        new createError(`Duplicate key error: ${duplicatedField}`, 400)
      );
    }
    next(error);
  }
};

// Login user

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // pass the object
    const user = await User.findOne({ email });

    if (!user) {
      return next(new createError("user not found!"), 404);
    }
    // check password  (true)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(new createError("Invalid Email Or Password!", 401));
    }
    // create token
    const token = jwt.sign(
      { _id: User._id },
      process.env.JWT_SECRET || "secretkey123",
      {
        expiresIn: "90d",
      }
    );

    res.status(200).json({
      status: "success",
      token,
      message: "Loged In Successfull!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

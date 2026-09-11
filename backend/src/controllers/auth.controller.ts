import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

// register controller
export const register = async (req: Request, res: Response) => {
  try {
    const {
      name,
      phone,
      email,
      password,
      studentClass,
      stream,
      location,
      role,
    } = req.body;

    // Check required fields
    if (!name || !email || !password || !studentClass || !stream) {
      return res.status(400).json({
        success: false,
        message: "Name, email, password, class and stream are required.",
      });
    }

    // Normalize email
    const normalizeEmail = email.trim().toLowerCase();
    //Find existing user
    const existingUser = await User.findOne({ email: normalizeEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exist.",
      });
    }

    //Password check
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPassword.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      studentClass,
      stream,
      location,
      role: role || "student",
    });

    //Generate Token
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      success: true,
      message: "User registerd successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        studentClass: user.studentClass,
        stream: user.stream,
        location: user.location,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Register Error: ", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// login controller
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // compare password
    const isPasswordVaild = await bcrypt.compare(password, user.password);
    if (!isPasswordVaild) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // JWT Create
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successfull",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login error", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

import mongoose from "mongoose";

enum UserRole {
  USER = "student",
  ADMIN = "admin",
  TEACHER = "teacher",
  SUPERADMIN = "superAdmin",
}

interface IUser {
  name: string;
  email: string;
  phone?: string;

  // Personal information
  dateOfBirth?: Date;
  profileImage?: string;
  bio?: string;

  // Academic information
  studentClass: string;
  stream: string;
  goal?: string;

  // Location
  location?: string;

  // Authentication
  password: string;
  role: UserRole;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    // =========================
    // Personal Information
    // =========================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    dateOfBirth: {
      type: Date,
    },

    profileImage: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    // =========================
    // Academic Information
    // =========================

    studentClass: {
      type: String,
      required: true,
      trim: true,
    },

    stream: {
      type: String,
      required: true,
      trim: true,
    },

    goal: {
      type: String,
      trim: true,
    },

    // =========================
    // Location
    // =========================

    location: {
      type: String,
      trim: true,
    },

    // =========================
    // Authentication
    // =========================

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;

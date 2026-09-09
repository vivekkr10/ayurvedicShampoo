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
  studentClass: string;
  stream: string;
  location?: string;
  password: string;
  role: UserRole;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: { type: String, trim: true },
    studentClass: { type: String, required: true, trim: true },
    stream: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    password: { type: String, required: true },
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

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//CORS
app.use(
  cors({
    origin: "*",
  }),
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

//Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Ai Study Assistant API is running",
  });
});

export default app;

import express from "express";
import cors from "cors";

const app = express();

//CORS
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Health check
app.get("/api/health", (_req, res)=>{
    res.status(200).json({
        success:true,
        message: "Ai Study Assistant API is running",
    });
});

export default app;
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import userRoutes from './routes/userRoutes.js';
import classRoutes from './routes/classRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173,import jwt from "jsonwebtoken";
  import User from "../models/UserModel.js";
  
  const protect = (roles = []) => {
    if (typeof roles === "string") {
      roles = [roles];
    }
  
    return async (req, res, next) => {
      let token;
  
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }
  
      if (!token) {
        return res.status(401).json({ msg: "Not authorized, no token" });
      }
  
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
  
        if (!req.user) {
          return res.status(401).json({ msg: "User not found" });
        }
  
        if (roles.length && !roles.includes(req.user.role)) {
          return res.status(403).json({ msg: "Forbidden: Role not allowed" });
        }
  
        next();
      } catch (err) {
        console.error(err);
        return res.status(401).json({ msg: "Token is not valid" });
      }
    };
  };
  
  export default protect;
  ",
  credentials: true,
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Serve frontend static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, "../frontend/dist")));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/dist/index.html'));
  });
}

// Public folder static middleware
app.use(express.static(join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
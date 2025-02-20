const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const cors = require("cors");
const authMiddleware = require("./middleware/middleware");
require("dotenv").config();

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Database connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Add db to request object
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Import routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");

// Public Routes (no auth required)
app.post("/api/auth/login", userRoutes);
app.post("/api/auth/register", userRoutes);

// Protected Routes with proper auth middleware
app.use("/api/dashboard", authMiddleware, (req, res, next) => {
  if (req.user.level_user !== "admin") {
    return res.status(403).json({ message: "Access denied: Admin only" });
  }
  next();
});

// Protected Routes
app.use("/api/users", authMiddleware, userRoutes);
app.use("/api/events", authMiddleware, eventRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

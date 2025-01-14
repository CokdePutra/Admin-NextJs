const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const eventRoutes = require("./eventRoutes");

// Test route
router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

// Use user routes
router.use("/users", userRoutes);
router.use("/events", eventRoutes);

module.exports = router;

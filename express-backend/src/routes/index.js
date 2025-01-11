const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");

// Test route
router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

// Use user routes
router.use("/users", userRoutes);

module.exports = router;

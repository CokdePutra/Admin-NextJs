const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.promise().query("SELECT * FROM tb_user");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await req.db
      .promise()
      .query("SELECT * FROM tb_user WHERE id_user = ?", [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create user (Signup with hashed password)
router.post("/", async (req, res) => {
  const {
    email,
    password,
    nama,
    nim,
    no_telp,
    golongan_darah,
    tanggal_lahir,
    alamat,
    level_user,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await req.db
      .promise()
      .query(
        "INSERT INTO tb_user (email, password, nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat, level_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          email,
          hashedPassword,
          nama,
          nim,
          no_telp,
          golongan_darah,
          tanggal_lahir,
          alamat,
          level_user,
        ],
      );
    res
      .status(201)
      .json({ id_user: result.insertId, email, nama, nim, no_telp });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await req.db
      .promise()
      .query("SELECT * FROM tb_user WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id_user, email: user.email },
      "your_secret_key",
      { expiresIn: "1h" },
    );
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware untuk autentikasi JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Access denied" });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Get all users (Protected)
router.get("/", authenticateToken, async (req, res) => {
  try {
    const [rows] = await req.db
      .promise()
      .query("SELECT id_user, email, nama, nim, no_telp FROM tb_user");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID (Protected)
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const [rows] = await req.db
      .promise()
      .query(
        "SELECT id_user, email, nama, nim, no_telp FROM tb_user WHERE id_user = ?",
        [req.params.id],
      );
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create user (Signup)
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
    res.status(201).json({
      id_user: result.insertId,
      email,
      nama,
      nim,
      no_telp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login attempt for email:", email); // Debug log

    const [rows] = await req.db
      .promise()
      .query("SELECT * FROM tb_user WHERE email = ?", [email]);

    if (rows.length === 0) {
      console.log("User not found"); // Debug log
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const user = rows[0];
    console.log("Found user:", { id: user.id_user, email: user.email }); // Debug log

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch); // Debug log

    if (!isMatch) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const token = jwt.sign(
      { id: user.id_user, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id_user,
        email: user.email,
        nama: user.nama,
        level_user: user.level_user,
      },
    });
  } catch (error) {
    console.error("Login error:", error); // Debug log
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

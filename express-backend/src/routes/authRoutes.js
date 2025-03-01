const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth"); // ✅ Perbaikan path
const router = express.Router();

// ✅ Middleware untuk mendapatkan user yang sedang login
router.get("/me", authMiddleware, (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Register User dengan Validasi Input
router.post("/register", async (req, res) => {
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

  if (!email || !password || !nama) {
    return res
      .status(400)
      .json({ message: "Email, Password, dan Nama wajib diisi" });
  }

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
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
  }
});

// ✅ Login User dengan Token yang Aman
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan Password wajib diisi" });
  }

  try {
    const [users] = await req.db
      .promise()
      .query("SELECT * FROM tb_user WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Email atau Password salah" });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Email atau Password salah" });
    }

    const token = jwt.sign(
      { id_user: user.id_user, level_user: user.level_user },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // ✅ Gunakan cookie agar lebih aman
    res.cookie("token", token, {
      httpOnly: true, // Mencegah akses dari JavaScript
      secure: process.env.NODE_ENV === "production", // Aktifkan hanya di HTTPS
      sameSite: "strict",
    });

    res.json({ message: "Login berhasil", user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat login" });
  }
});

module.exports = router;

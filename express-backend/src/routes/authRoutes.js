const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

/**
 * GET /me
 * Mengambil data user yang sedang login berdasarkan token JWT.
 * Token diambil dari header Authorization.
 * Response: data user lengkap dari database.
 */
router.get("/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  const token = authHeader.split(" ")[1];
  try {
    // Decode token untuk mendapatkan id_user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id_user = decoded.id_user;

    // Query ke database untuk ambil data user lengkap
    const [rows] = await req.db
      .promise()
      .query(
        "SELECT id_user, email, nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat, level_user FROM tb_user WHERE id_user = ?",
        [id_user],
      );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json({ user: rows[0] });
  } catch (error) {
    res.status(401).json({ message: "Token tidak valid" });
  }
});

/**
 * POST /register
 * Registrasi user baru.
 * Validasi input, hash password, dan simpan ke database.
 */
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

  // Validasi input wajib
  if (!email || !password || !nama) {
    return res
      .status(400)
      .json({ message: "Email, Password, dan Nama wajib diisi" });
  }

  try {
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user ke database
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

/**
 * POST /login
 * Login user, validasi password, generate JWT, dan kirim data user.
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ message: "Email dan Password wajib diisi" });
  }

  try {
    // Cari user berdasarkan email
    const [users] = await req.db
      .promise()
      .query("SELECT * FROM tb_user WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(401).json({ message: "Email atau Password salah" });
    }

    const user = users[0];

    // Cek password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Email atau Password salah" });
    }

    // Generate JWT (hanya id_user dan level_user, jangan simpan data sensitif di token)
    const token = jwt.sign(
      {
        id_user: user.id_user,
        level_user: user.level_user,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // Set cookie token (opsional, jika ingin pakai cookie)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Kirim data user lengkap ke frontend (bukan dari token, tapi dari database)
    res.json({
      message: "Login berhasil",
      token,
      user: {
        id_user: user.id_user,
        email: user.email,
        nama: user.nama,
        nim: user.nim,
        no_telp: user.no_telp,
        golongan_darah: user.golongan_darah,
        tanggal_lahir: user.tanggal_lahir,
        alamat: user.alamat,
        level_user: user.level_user,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat login" });
  }
});

/**
 * POST /logout
 * Logout user, hapus cookie token.
 */
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.json({ message: "Logout berhasil" });
});

module.exports = router;

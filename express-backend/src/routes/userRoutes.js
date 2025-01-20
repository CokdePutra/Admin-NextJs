const express = require("express");
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

// Create user
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
    const [result] = await req.db
      .promise()
      .query(
        "INSERT INTO tb_user (email, password, nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat, level_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          email,
          password,
          nama,
          nim,
          no_telp,
          golongan_darah,
          tanggal_lahir,
          alamat,
          level_user,
        ],
      );
    res.status(201).json({ id_user: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user
router.put("/:id", async (req, res) => {
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
    const [result] = await req.db
      .promise()
      .query(
        "UPDATE tb_user SET email = ?, password = ?, nama = ?, nim = ?, no_telp = ?, golongan_darah = ?, tanggal_lahir = ?, alamat = ?, level_user = ? WHERE id_user = ?",
        [
          email,
          password,
          nama,
          nim,
          no_telp,
          golongan_darah,
          tanggal_lahir,
          alamat,
          level_user,
          req.params.id,
        ],
      );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await req.db
      .promise()
      .query("DELETE FROM tb_user WHERE id_user = ?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

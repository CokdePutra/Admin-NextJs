const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
require("dotenv").config();

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Test route
router.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(`The solution is: ${results[0].solution}`);
  });
});

// Create a new user
router.post("/users", (req, res) => {
  const { nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat } =
    req.body;
  const query =
    "INSERT INTO tb_user (nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send({
        id_user: results.insertId,
        nama,
        nim,
        no_telp,
        golongan_darah,
        tanggal_lahir,
        alamat,
      });
    },
  );
});

// Get all users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM tb_user", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

// Get a user by ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM tb_user WHERE id_user = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(results[0]);
  });
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat } =
    req.body;
  const query =
    "UPDATE tb_user SET nama = ?, nim = ?, no_telp = ?, golongan_darah = ?, tanggal_lahir = ?, alamat = ? WHERE id_user = ?";
  db.query(
    query,
    [nama, nim, no_telp, golongan_darah, tanggal_lahir, alamat, id],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.affectedRows === 0) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send({ message: "User updated successfully" });
    },
  );
});

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tb_user WHERE id_user = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User deleted successfully" });
  });
});

module.exports = router;

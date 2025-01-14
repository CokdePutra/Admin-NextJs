const express = require("express");
const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.promise().query("SELECT * FROM tb_event");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get event by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await req.db
      .promise()
      .query("SELECT * FROM tb_event WHERE id_event = ?", [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create event
router.post("/", async (req, res) => {
  const { nama_event, tanggal_event, deskripsi } = req.body;
  try {
    const [result] = await req.db
      .promise()
      .query(
        "INSERT INTO tb_event (nama_event, tanggal_event, deskripsi) VALUES (?, ?, ?)",
        [nama_event, tanggal_event, deskripsi],
      );
    res.status(201).json({ id_event: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update event
router.put("/:id", async (req, res) => {
  const { nama_event, tanggal_event, deskripsi } = req.body;
  try {
    const [result] = await req.db
      .promise()
      .query(
        "UPDATE tb_event SET nama_event = ?, tanggal_event = ?, deskripsi = ? WHERE id_event = ?",
        [nama_event, tanggal_event, deskripsi, req.params.id],
      );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete event
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await req.db
      .promise()
      .query("DELETE FROM tb_event WHERE id_event = ?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

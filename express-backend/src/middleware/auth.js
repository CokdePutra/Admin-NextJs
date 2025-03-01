const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Akses ditolak, token tidak ditemukan" });
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET,
    );
    req.user = decoded; // Simpan data user ke request
    next(); // Lanjutkan ke handler berikutnya
  } catch (error) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};

module.exports = authMiddleware;

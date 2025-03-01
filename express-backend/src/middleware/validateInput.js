const validateInput = (req, res, next) => {
  const { email, password, nama, no_telp } = req.body;

  if (!email || !password || !nama || !no_telp) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Format email tidak valid" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password minimal 6 karakter" });
  }

  next(); // Lanjut ke handler berikutnya jika valid
};

module.exports = validateInput;

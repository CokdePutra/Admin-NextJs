const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const routes = require("./routes");

dotenv.config();

const app = express();

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

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/api/`);
});

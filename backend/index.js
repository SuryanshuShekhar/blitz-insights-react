const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DATA_DIR = path.join(__dirname, "data", "leads");
fs.mkdirSync(DATA_DIR, { recursive: true });

app.post("/api/contact", (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const now = new Date().toISOString();
    const id = now.replace(/[:.]/g, "-");
    const payload = { id, name, email, company, message, createdAt: now };
    // write file
    const filePath = path.join(DATA_DIR, `${id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
    console.log("New lead saved:", filePath);
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Backend listening on http://localhost:${PORT}`)
);

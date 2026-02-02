const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const ROOT = __dirname;
const EXTRACTED = path.join(ROOT, "MiitopiaExtracted");

// Serve extracted assets (region folders) and allow dotfiles
app.use(express.static(EXTRACTED, { dotfiles: "allow" }));

// Serve site files (html, miis.txt) and allow dotfiles too (harmless)
app.use(express.static(ROOT, { dotfiles: "allow" }));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

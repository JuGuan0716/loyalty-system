const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT: Railway port MUST be used directly
const PORT = process.env.PORT;

// serve static files
app.use(express.static(__dirname));

// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// IMPORTANT FIX: ensure binding delay safety
const server = app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});

// IMPORTANT: handle Railway health check timing
server.on("error", (err) => {
    console.error("Server error:", err);
});
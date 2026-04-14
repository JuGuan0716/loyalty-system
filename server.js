const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT;

// IMPORTANT: serve static FIRST
app.use(express.static(__dirname));

// FORCE root to index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// CATCH ALL (important fix)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
const express = require("express");
const path = require("path");

const app = express();

// MUST use Railway port
const PORT = process.env.PORT;

// serve static files
app.use(express.static(path.join(__dirname)));

// homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// IMPORTANT: bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
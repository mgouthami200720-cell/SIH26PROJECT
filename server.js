const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Allow JSON data from the website
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Store the latest training result
let latestTrainingResult = null;

// Save training result
app.post("/api/training-result", (req, res) => {
    latestTrainingResult = req.body;

    console.log("Training result received:");
    console.log(latestTrainingResult);

    res.json({
        success: true,
        message: "Training result saved successfully"
    });
});

// Get latest training result
app.get("/api/training-result", (req, res) => {
    res.json({
        success: true,
        result: latestTrainingResult
    });
});

// Main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// HTTPS certificate
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
};

// Start HTTPS server
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
    console.log("");
    console.log("========================================");
    console.log("   MINING GAS LEAK SAFETY TRAINING");
    console.log("========================================");
    console.log("");
    console.log(`Laptop:  https://localhost:${PORT}`);
    console.log(`Mobile:  https://10.120.186.115:${PORT}`);
    console.log("");
    console.log("HTTPS server is ready.");
    console.log("Keep this terminal open while using the project.");
    console.log("");
});
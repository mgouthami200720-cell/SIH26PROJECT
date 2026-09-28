const express = require("express");
const path = require("path");

const app = express();

// Render provides PORT automatically
const PORT = process.env.PORT || 3000;

// Allow JSON data from the website
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve files from public folder
app.use(express.static(path.join(__dirname, "public")));

let latestTrainingResult = null;

// Save training result
app.post("/api/training-result", (req, res) => {
    latestTrainingResult = req.body;

    console.log("Training result received:", latestTrainingResult);

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

// Start HTTP server
app.listen(PORT, "0.0.0.0", () => {
    console.log("========================================");
    console.log("   MINING GAS LEAK SAFETY TRAINING");
    console.log("========================================");
    console.log(`Server running on port ${PORT}`);
});
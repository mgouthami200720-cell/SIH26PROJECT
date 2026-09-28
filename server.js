const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

let latestTrainingResult = null;

app.post("/api/training-result", (req, res) => {
    latestTrainingResult = req.body;

    console.log("Training result received:");
    console.log(latestTrainingResult);

    res.json({
        success: true,
        message: "Training result saved successfully"
    });
});

app.get("/api/training-result", (req, res) => {
    res.json({
        success: true,
        result: latestTrainingResult
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
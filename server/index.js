require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false, limit: "50mb" }));

// Define Routes
app.use("/api/gameStats", require("./api/gameStats"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

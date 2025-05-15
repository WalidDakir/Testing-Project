const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); // Load environment variables from .env
const connectDB = require("./config/db"); // Connect to MongoDB
const router = require("./routes/index"); // Import API routes

const app = express();
const BSON = require("bson");
console.log(BSON); // Log BSON to verify dependencies

// Enable CORS for frontend communication
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // Ensures FRONTEND_URL is properly set
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// Middleware to handle JSON & cookies
app.use(express.json());
app.use(cookieParser());

// API Route Configuration
app.use("/api", router);

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("✅ Connected to MongoDB");
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1); // Exit if the database connection fails
  });

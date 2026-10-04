const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const foodRoutes = require("./routes/foodRoutes");

dotenv.config();

const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Food routes
app.use("/api/foods", foodRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "FoodCompare API is running!",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
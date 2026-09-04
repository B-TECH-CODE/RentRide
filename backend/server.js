const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "RentRide Backend is running successfully 🚗",
  });
});

// Cars API - temporary data
app.get("/api/cars", (req, res) => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      category: "Sedan",
      price: 2500,
      seats: 5,
    },
    {
      id: 2,
      name: "Hyundai Creta",
      category: "SUV",
      price: 3000,
      seats: 5,
    },
    {
      id: 3,
      name: "BMW 3 Series",
      category: "Luxury",
      price: 5000,
      seats: 5,
    },
  ];

  res.json(cars);
});

// Start server
app.listen(PORT, () => {
  console.log(`RentRide Backend running on http://localhost:${PORT}`);
});
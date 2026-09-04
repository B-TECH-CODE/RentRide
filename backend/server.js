const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "RentRide Backend is running successfully 🚗",
  });
});

// Cars API
app.get("/api/cars", (req, res) => {
  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
      year: 2024,
      location: "Hyderabad",
      rating: 4.8,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      category: "Sedan",
      price: 2500,
    },
    {
      id: 2,
      brand: "Hyundai",
      model: "Creta",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      year: 2024,
      location: "Hyderabad",
      rating: 4.7,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      category: "SUV",
      price: 3000,
    },
    {
      id: 3,
      brand: "BMW",
      model: "3 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      year: 2023,
      location: "Hyderabad",
      rating: 4.9,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      category: "Luxury",
      price: 5000,
    },
  ];

  res.json(cars);
});

// Start server
app.listen(PORT, () => {
  console.log(`RentRide Backend running on http://localhost:${PORT}`);
});
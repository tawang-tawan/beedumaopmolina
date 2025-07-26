const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Plant = require("./models/plant");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ✅ TEMPORARY GET route to seed plant data
app.get("/plants/seed", async (req, res) => {
  await Plant.deleteMany({});
  await Plant.insertMany([
    {
      name: "Snake Plant",
      light: "low",
      waterFrequency: "Every 2 weeks",
    },
    {
      name: "Peace Lily",
      light: "indirect",
      waterFrequency: "Once a week",
    },
    {
      name: "Spider Plant",
      light: "indirect",
      waterFrequency: "Once a week",
    },
    {
      name: "ZZ Plant",
      light: "low",
      waterFrequency: "Every 2 weeks",
    },
    {
      name: "Aloe Vera",
      light: "direct",
      waterFrequency: "Every 3 weeks",
    },
    {
      name: "Fiddle Leaf Fig",
      light: "indirect",
      waterFrequency: "Once a week",
    },
    {
      name: "Pothos",
      light: "low",
      waterFrequency: "Once a week",
    },
    {
      name: "Rubber Plant",
      light: "indirect",
      waterFrequency: "Every 10 days",
    },
    {
      name: "Jade Plant",
      light: "direct",
      waterFrequency: "Every 2 weeks",
    },
    {
      name: "Calathea",
      light: "indirect",
      waterFrequency: "2 times a week",
    },
  ]);
  res.send("🌱 Seeded 10 plants into the database!");
});

// GET all plants
app.get("/plants", async (req, res) => {
  const plants = await Plant.find();
  res.json(plants);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


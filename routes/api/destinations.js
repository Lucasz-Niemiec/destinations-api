const express = require("express");
const router = express.Router();
const Destination = require("../../model/Destinations");
//getting all
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//creating
router.post("/", async (req, res) => {
  const destination = new Destination({
    destinationName: req.body.destinationName,
    country: req.body.country,
    description: req.body.description,
    packageDescription: req.body.packageDescription,
    price: req.body.price,
    imageurl: req.body.imageurl,
  });
  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;

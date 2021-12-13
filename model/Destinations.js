const { urlencoded } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
  destinationName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  packageDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Destinations", destinationsSchema);

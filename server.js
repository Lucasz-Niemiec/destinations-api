require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT;
//connect to mongo db
connectDB();
//cors
app.use(cors(corsOptions));
//
app.use(express.json());
app.use("/destinations", require("./routes/api/destinations"));
//static
app.use(express.static(path.join(__dirname, "public")));

app.get("/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/budapestHungary.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "budapestHungary.jpg"));
});
app.get("/CopenhagenDenmark.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "CopenhagenDenmark.jpg"));
});
app.get("/dubronikCroatia.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "dubronikCroatia.jpg"));
});
app.get("/Edinburgh.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "Edinburgh.jpg"));
});
app.get("/killarneyNationalPark.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "killarneyNationalPark.jpg"));
});
app.get("/parovalleybhutan.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "images", "parovalleybhutan.jpg"));
});
//
mongoose.connection.once("open", () => {
  console.log("conected to DB");
  app.listen(PORT || 3500, () => console.log(`server running on port ${PORT}`));
});

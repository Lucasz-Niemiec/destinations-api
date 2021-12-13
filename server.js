require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

//connect to mongo db
connectDB();
//cors
app.use(cors(corsOptions));
//
app.use(express.json());
app.use("/destinations", require("./routes/api/destinations"));
//static
app.use(express.static(path.join(__dirname, "public")));

app.get("/image(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "image.html"));
});
//
mongoose.connection.once("open", () => {
  console.log("conected to DB");
  app.listen(3500, () => console.log("server running on port 3500"));
});

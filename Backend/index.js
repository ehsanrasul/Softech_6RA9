const express = require("express");
const app = express();
const port = 3001;
var mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
require('dotenv').config();

app.use(express.json());

//Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI,
  {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));




app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
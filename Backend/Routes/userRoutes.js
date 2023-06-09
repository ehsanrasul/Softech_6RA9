const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../Models/UserSchema')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.post("/signup", async (req, res) => {
  try {
    const user = await new User(req.body);
    user
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).json({ status: response });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.json({ status: "error" });
  }
});


app.post("/login", async (req, res) => {
  const result = await User.findOne({
    full_name: req.body.full_name,
    password: req.body.password,
  })
    .then((obj) => {
      if (obj) {
        res.json({ found: true, object: obj });
      } else {
        res.json({ found: false });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = app;


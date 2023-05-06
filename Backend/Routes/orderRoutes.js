const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Order = require('../Models/orderSchema')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.post("/placeOrder", async (req, res) => {
  try {
    const order = await new User(req.body);
    order
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


app.get("/byName/:name", async (req, res) => {
  const result = await User.findOne({
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


app.get("/byStatus/:status", async (req, res) => {
    const result = await User.findOne({
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



  app.get("/byItemName/:itemName", async (req, res) => {
    const result = await User.findOne({
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



  app.get("/byUserEmail/:email", async (req, res) => {
    const result = await User.findOne({
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


  app.get("/dateOfOrder/:dt_of_order", async (req, res) => {
    const result = await User.find({
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


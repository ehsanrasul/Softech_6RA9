const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Inventory = require('../Models/inventorySchema')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.post("/addItem", async (req, res) => {
  try {
    const item = await new Inventory(req.body);
    item
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




app.get('/'  ,async (req , res)=>{
    try {
    const items = await Inventory.find()
    res.json(items)
    }
    catch(err) {
        res.status.json({message: err.message})
    }
})
   



module.exports = app;


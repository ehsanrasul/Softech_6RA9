const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
  {
    title: {
      type: String,
      default: 0,
    },
    quantity: {
      type: Number,
      required: false,
    },
    market_price: {
      type: Number,
      required: false,
    },
    cost_price: {
      type: Number,
      required: false,
    },
    margin: {
      type: Number,
      required: false,
    },
    inventory_type: {
      type: String,
      required: false,
    },
    minimum_age:{
        type: Number,
        required: false,
    }
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;

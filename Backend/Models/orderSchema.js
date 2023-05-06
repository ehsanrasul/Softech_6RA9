const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    userName: {
      type: Number,
      default: 0,
    },
    itemName: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
      required: false,
    },
    dateOfOrder: {
      type: Number,
      required: false,
    },
    orderStatus: {
      type: String,
      required: false,
    }
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

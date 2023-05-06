const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userid: {
      type: Number,
      default: 0,
    },
    full_name: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    phone_number: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

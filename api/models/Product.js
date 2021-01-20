const mongoose = require("mongoose");

const Product = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    state: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", Product);

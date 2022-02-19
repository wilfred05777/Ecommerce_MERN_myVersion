const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const product = mongoose.model("product", productSchema, "Product");
module.exports = product;

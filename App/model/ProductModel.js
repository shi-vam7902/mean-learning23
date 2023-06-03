const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productQty: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
},{timestamps:true});
module.exports = mongoose.model("product", ProductModel);

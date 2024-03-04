const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    manufacturer: {
      type: String,
      required: true
    },
    stock: {
      type: String,
      required: true
    },
    description: String
  }, {timestamps: true}
)

const Product = new mongoose.model("product", ProductSchema)
module.exports = Product

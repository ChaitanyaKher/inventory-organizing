const express = require("express")
const app = express()
const product = require("../controller/product")

app.post("/add", product.addProduct)
app.get("/get/:userId", product.getAllProducts)

module.exports = app
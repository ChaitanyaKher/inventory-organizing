const Product = require("../models/product");

//Add a product
const addProduct = (req, res) => {
  console.log("req: ", req.body.userId);
  const addProduct = new Product({
    userId: req.body.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    stock: 0,
    description: req.body.description,
  });

  addProduct.save()
  .then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(200).send(err);
  })
};

//Get All Products
const getAllProducts = async (req, res) => {
  const findAllProducts = await Product.find({
    userId: req.params.userId
  }).sort({_id: -1})
  res.json(findAllProducts)
}

module.exports = {
  addProduct,
  getAllProducts
}
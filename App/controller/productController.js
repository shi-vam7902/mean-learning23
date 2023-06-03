const ProductModel = require("../model/ProductModel");
//add products
exports.addProduct = (req, res) => {
  const products = new ProductModel(req.body);

  console.log(req.body);
  console.log("after calling");

  products
    .save()
    .then((data) => {
      res.json({
        message: "Data Added Succesully",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error Saving ",
        status: 400,
        data: err,
      });
    });
  console.log(products);
};
// listing products
exports.getAllProducts = (req, res) => {
  ProductModel.find()
    .then((data) => {
      res.json({
        message: "Data retrieved Succesully",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error Saving Succesully",
        status: 400,
        data: err,
      });
    });
};
//update product
module.exports.updateProduct = () => {
  let productId = req.params.productId;
  console.log(productId);
  ProductModel.findByIdAndUpdate({ _id: productId }, req.body)
    .then((data) => {
      res.json({
        status: 200,
        message: "Product Updated SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error Deleting Succesully",
        status: 400,
        data: err,
      });
    });
};
//delete by id
module.exports.deleteProductById = function (req, res) {
  console.log("this is del");

  let productId = req.params.productId;
  console.log(id);

  ProductModel.findOneAndDelete({ _id: productId })
    .then((data) => {
      res.json({
        status: 200,
        message: "Product Updated SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 200,
        message: "Product Deleting Failed",
        data: data,
      });
    });
};
//get by id
module.exports.getProductById = (req, res) => {

  console.log("this is finding ");

  let productId = req.params.productId;
  // console.log(id);
  ProductModel.findById({ _id: productId })
    .then((data) => {
      res.json({
        status: 200,
        message: "Product Found SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 200,
        message: "Product Finding Failed",
        data: data,
      });
    });
};

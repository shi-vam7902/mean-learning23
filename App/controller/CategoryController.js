const categoryModel = require("../model/CategoryModel");
module.exports.addCategory = (req, res) => {
  const categories = new categoryModel(req.body);
  categories
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
  console.log(categories);
};
// listing products
exports.getAllCategories = (req, res) => {
  categoryModel
    .find()
    .then((data) => {
      res.json({
        message: "Data retrieved Succesully",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error finding",
        status: 400,
        data: err,
      });
    });
};
//get by id
module.exports.updateCategory = () => {
  let categoryId = req.params.categoryId;
  console.log(categoryId);
  categoryId
    .findByIdAndUpdate({ _id: categoryId }, req.body)
    .then((data) => {
      res.json({
        status: 200,
        message: "Category Updated SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error UPDATING",
        status: 400,
        data: err,
      });
    });
};
//delete by id
module.exports.deleteProductById = function (req, res) {
  console.log("this is del");

  let categoryId = req.params.categoryId;
  console.log(categoryId);
  categoryModel
    .findByIdAndDelete({ _id: categoryId })
    .then((data) => {
      res.json({
        status: 200,
        message: "Category Deleted SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 200,
        message: "Category Deleting Failed",
        data: data,
      });
    });
};
module.exports.getProductById = (req, res) => {
  console.log("this is finding ");

  let categoryId = req.params.categroyId;
  console.log(categoryId);
  categoryModel
    .findById({ _id: categoryId })
    .then((data) => {
      res.json({
        status: 200,
        message: "Category Found SuccessFully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 200,
        message: "Category Finding Failed",
        data: data,
      });
    });
};

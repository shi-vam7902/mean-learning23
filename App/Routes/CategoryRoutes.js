const express = require('express')
const router = express.Router()
const categoryController = require('../controller/CategoryController')
router.post("/category",categoryController.addCategory)
router.put("/category/:categoryId",categoryController.updateCategory)
router.get("/category",categoryController.getAllCategories)
router.delete("/catgeory/:catgeoryId",categoryController.deletecategoryById)
router.get("/category/:categoryId",categoryController.getCategotyById)
module.exports = router
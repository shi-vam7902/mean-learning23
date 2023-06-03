const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
router.post("/product",productController.addProduct)
router.put("/product/:productId",productController.updateProduct)
router.get("/product",productController.getAllProducts)
router.delete("/product/:productId",productController.deleteProductById)
router.get("/product/:productId",productController.getProductById)
module.exports = router
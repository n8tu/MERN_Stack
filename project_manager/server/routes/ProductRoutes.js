const router = require("express").Router();
const ProductController = require("../controllers/ProductController")

// Note : Order is matter , params should be after normal paths


// Add a product to database
router.post("/product/new", ProductController.create)

// Get all products from database
router.get("/product", ProductController.all)

// Get product by id from database
router.get("/product/:_id", ProductController.find)

// Delete product by id from database
router.delete("/product/:_id/delete", ProductController.delete)

// Update product by id from database
router.put("/product/:_id/update", ProductController.update)

module.exports = router;

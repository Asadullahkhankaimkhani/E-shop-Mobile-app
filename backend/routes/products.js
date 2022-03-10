const express = require("express");
const router = express.Router();
const {
  createProduct,
  productList,
  productSolo,
  productUpdate,
} = require("../controller/products");

router.get(`/products`, productList);
router.get(`product/:id`, productSolo);
router.post(`/product`, createProduct);
router.put("product/:id", productUpdate);

module.exports = router;

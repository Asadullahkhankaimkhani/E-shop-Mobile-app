const express = require("express");
const router = express.Router();
const {
  createProduct,
  productList,
  productSolo,
} = require("../controller/products");

router.get(`/products`, productList);
router.get(`product/:id`, productSolo);

router.post(`/products`, createProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createProduct,
  productList,
  productSolo,
  productUpdate,
  productDelete,
} = require("../controller/products");

router.get(`/products`, productList);
router.get(`product/:id`, productSolo);
router.post(`/product`, createProduct);
router.put("product/:id", productUpdate);
router.delete("product/:id", productDelete);

module.exports = router;

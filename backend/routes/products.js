const express = require("express");
const router = express.Router();
const {
  createProduct,
  productList,
  productSolo,
  productUpdate,
  productDelete,
  productCount,
  productFeature,
} = require("../controller/products");

router.get(`/products`, productList);
router.get(`product/:id`, productSolo);
router.post(`/product`, createProduct);
router.put("product/:id", productUpdate);
router.delete("product/:id", productDelete);
router.get(`product/get/count`, productCount);
router.get(`product/get/featured/:count`, productFeature);

module.exports = router;

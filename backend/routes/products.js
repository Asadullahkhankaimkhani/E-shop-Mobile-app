const express = require("express");
const router = express.Router();
const { createProduct, productList } = require("../controller/products");

router.get(`/products`, productList);
router.post(`/products`, createProduct);

module.exports = router;

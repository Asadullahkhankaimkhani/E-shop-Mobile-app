const express = require("express");
const router = express.Router();
const { createProduct, productList } = require("../controller/products");

router.get(`/`, productList);
router.post(`/`, createProduct);

module.exports = router;

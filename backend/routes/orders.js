const express = require("express");
const router = express.Router();
const { orderList } = require("../controller/orders");

router.get(`/orders`, orderList);

module.exports = router;

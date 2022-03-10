const express = require("express");
const {
  orderList,
  orderSolo,
  orderCreate,
  orderUpdate,
  orderDelete,
  orderTotalSale,
  orderCount,
  orderUserSolo,
} = require("../controller/orders");
const router = express.Router();

router.get(`/orders`, orderList);

router.get(`order/:id`, orderSolo);

router.post("/order", orderCreate);

router.put("/order/:id", orderUpdate);

router.delete("/user/:id", orderDelete);

router.get("/order/get/totalsales", orderTotalSale);

router.get(`/get/count`, orderCount);

router.get(`/get/userorders/:userid`, orderUserSolo);

module.exports = router;

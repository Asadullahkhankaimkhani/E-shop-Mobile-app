const express = require("express");
const router = express.Router();
const {
  categoryList,
  categoryCreate,
  categoryUpdate,
} = require("../controller/categories");

router.get(`/category`, categoryList);
router.post("/category", categoryCreate);
router.delete("/category/:id", categoryUpdate);

module.exports = router;

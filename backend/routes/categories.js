const express = require("express");
const router = express.Router();
const {
  categoryList,
  categoryCreate,
  categoryUpdate,
  categorySolo,
} = require("../controller/categories");

router.get(`/category`, categoryList);
router.get("/:id", categorySolo);
router.post("/category", categoryCreate);
router.delete("/category/:id", categoryUpdate);

module.exports = router;

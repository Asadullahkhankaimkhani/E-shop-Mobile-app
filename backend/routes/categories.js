const express = require("express");
const router = express.Router();
const {
  categoryList,
  categoryCreate,
  categoryUpdate,
  categorySolo,
  categoryDelete,
} = require("../controller/categories");

router.get(`/category`, categoryList);
router.get("/:id", categorySolo);
router.post("/category", categoryCreate);
router.put("category/:id", categoryUpdate);
router.delete("/category/:id", categoryDelete);

module.exports = router;

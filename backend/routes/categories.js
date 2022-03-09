const express = require("express");
const router = express.Router();
const { categoriesList } = require("../controller/categories");

router.get(`/categories`, categoriesList);

module.exports = router;

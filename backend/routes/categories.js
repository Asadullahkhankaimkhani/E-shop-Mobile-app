const express = require("express");
const router = express.Router();
const { categoriesList } = require("../controller/categories");

router.get(`/`, categoriesList);

module.exports = router;

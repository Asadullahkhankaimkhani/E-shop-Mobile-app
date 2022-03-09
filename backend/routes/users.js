const express = require("express");
const router = express.Router();
const { userList } = require("../controller/users");

router.get(`/users`, userList);

module.exports = router;

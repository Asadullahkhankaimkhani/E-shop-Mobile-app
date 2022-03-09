const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const { userList } = require("../controller/users");

router.get(`/`, userList);

module.exports = router;

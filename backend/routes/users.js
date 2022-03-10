const express = require("express");
const router = express.Router();

const {
  userRegister,
  userCount,
  userCreate,
  userDelete,
  userGet,
  userList,
  userLogin,
  userUpdate,
} = require("../controller/users");

router.get(`/users`, userList);

router.get("/user/:id", userGet);

router.post("/user", userCreate);

router.put("/user/:id", userUpdate);

router.post("/login", userLogin);

router.post("/register", userRegister);

router.delete("/user/:id", userDelete);

router.get(`/get/count`, userCount);

module.exports = router;

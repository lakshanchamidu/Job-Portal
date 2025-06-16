const express = require("express");
const router = express.Router();

const UserLoginController = require("../controller/UserController");

router.post("/", UserLoginController.createUser);

module.exports = router;

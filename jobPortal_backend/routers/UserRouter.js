const express = require("express");
const router = express.Router();

const UserLoginController = require("../controller/UserController");

router.post("/", UserLoginController.createUser);
router.get("/getAllusers", UserLoginController.getAllUsers);
router.get("/getUserDetail/:id", UserLoginController.getUserById);

module.exports = router;

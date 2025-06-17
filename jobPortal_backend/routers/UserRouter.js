const express = require("express");
const router = express.Router();

const UserLoginController = require("../controller/UserController");
const UserHomeController = require("../controller/UserHomeCntroller");

router.post("/", UserLoginController.createUser);
router.get("/getAllusers", UserLoginController.getAllUsers);
router.get("/getUserDetail/:id", UserLoginController.getUserById);
router.post("/userLogin", UserLoginController.loginUser);
router.get("/home/getAllJobs", UserHomeController.getUserAllJobs);
router.post("/apply/:jobId", UserHomeController.submitApplication);

module.exports = router;

const express = require("express");
const router = express.Router();
const adminController = require("../controller/AdminController");

router.post("/signup", adminController.createAdmin);
router.get("/", adminController.getAllAdmins);
router.post("/login", adminController.loginAdmin);

module.exports = router;

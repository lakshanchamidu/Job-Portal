const express = require("express");
const router = express.Router();
const { createAdmin } = require("../controller/AdminController");

router.post("/", createAdmin);

module.exports = router;

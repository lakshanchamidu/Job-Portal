const express = require("express");
const router = express.Router();

const JobController = require("../controller/JobController");

router.post("/addNewJob", JobController.addNewJob);
router.get("/getAllJobs", JobController.getAllJob);
router.get("/getJobsByName", JobController.getJobByName);
router.delete("/deleteJob/:id", JobController.deleteJob);

module.exports = router;

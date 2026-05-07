const express = require("express");
const router = express.Router();
const reviewCtrl = require("../controllers/reviewsController");

// Get a list of everyone who submitted
router.get("/submissions", reviewCtrl.getSubmissionSummary);

// Get the full detail for one user (Questionnaire + Donation history)
router.get("/review/:userId", reviewCtrl.getUserReview);

module.exports = router;
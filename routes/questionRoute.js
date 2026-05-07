const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/questionController");

// Admin creates questions
router.post("/admin/add", ctrl.createQuestion);

// User gets the list of questions to answer
router.get("/", ctrl.getQuestions);

// User submits their completed form
router.post("/submit", ctrl.submitAnswers);

module.exports = router;
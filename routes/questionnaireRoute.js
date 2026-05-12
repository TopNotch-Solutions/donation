const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/questionnaireController");

router.get("/questions", ctrl.getQuestions);

router.post("/submit", ctrl.submitQuestionnaire);

router.get("/submissions", ctrl.getAllSubmissions);

router.get("/submissions/count", ctrl.getTotalSubmissions);

router.get("/user/:userId", ctrl.getUserQuestionnaires);

router.get("/user/:userId/count", ctrl.getUserTotalSubmissions);

router.get("/:id", ctrl.getQuestionnaireById);

router.put("/:id/review", ctrl.reviewQuestionnaire);

module.exports = router;

const { Question } = require("../models/question");
const { Response } = require("../models/response");

exports.createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json({ success: true, data: question });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.status(200).json({ success: true, data: questions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Bulk submit answers (User answering the questionnaire)
exports.submitAnswers = async (req, res) => {
    try {
        // req.body should be an array of answers: [{questionId: 1, userId: 5, booleanValue: true}, ...]
        const responses = await Response.bulkCreate(req.body);
        res.status(201).json({ success: true, message: "Responses saved!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
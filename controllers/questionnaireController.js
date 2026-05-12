const { DonationQuestionnaire } = require("../models/donationQuestionnaire");
const { QuestionnaireAnswer } = require("../models/questionnaireAnswer");
const { QUESTIONNAIRE_SECTIONS, ALL_QUESTION_IDS } = require("../data/questions");
const User = require("../models/user");

exports.getQuestions = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: QUESTIONNAIRE_SECTIONS });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.submitQuestionnaire = async (req, res) => {
  try {
    const { userId, answers } = req.body;

    if (!userId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: "userId and answers array are required",
      });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const invalidIds = answers
      .map((a) => a.questionId)
      .filter((id) => !ALL_QUESTION_IDS.includes(id));

    if (invalidIds.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Invalid question IDs: ${invalidIds.join(", ")}`,
      });
    }

    const missingIds = ALL_QUESTION_IDS.filter(
      (id) => !answers.some((a) => a.questionId === id)
    );

    if (missingIds.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing answers for questions: ${missingIds.join(", ")}`,
      });
    }

    const questionnaire = await DonationQuestionnaire.create({ userId });

    const answerRecords = answers.map((a) => ({
      questionnaireId: questionnaire.id,
      questionId: a.questionId,
      answer: a.answer,
    }));

    await QuestionnaireAnswer.bulkCreate(answerRecords);

    const result = await DonationQuestionnaire.findByPk(questionnaire.id, {
      include: [{ model: QuestionnaireAnswer, as: "answers" }],
    });

    res.status(201).json({
      success: true,
      message: "Questionnaire submitted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUserQuestionnaires = async (req, res) => {
  try {
    const { userId } = req.params;

    const questionnaires = await DonationQuestionnaire.findAll({
      where: { userId },
      include: [{ model: QuestionnaireAnswer, as: "answers" }],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ success: true, data: questionnaires });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getQuestionnaireById = async (req, res) => {
  try {
    const { id } = req.params;

    const questionnaire = await DonationQuestionnaire.findByPk(id, {
      include: [
        { model: QuestionnaireAnswer, as: "answers" },
        { model: User, as: "user", attributes: { exclude: ["password"] } },
      ],
    });

    if (!questionnaire) {
      return res.status(404).json({ success: false, message: "Questionnaire not found" });
    }

    res.status(200).json({ success: true, data: questionnaire });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.reviewQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reviewedBy, reviewNotes } = req.body;

    const questionnaire = await DonationQuestionnaire.findByPk(id);
    if (!questionnaire) {
      return res.status(404).json({ success: false, message: "Questionnaire not found" });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status must be "approved" or "rejected"',
      });
    }

    await questionnaire.update({
      status,
      reviewedBy,
      reviewedAt: new Date(),
      reviewNotes,
    });

    res.status(200).json({
      success: true,
      message: `Questionnaire ${status}`,
      data: questionnaire,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTotalSubmissions = async (req, res) => {
  try {
    const total = await DonationQuestionnaire.count();

    res.status(200).json({ success: true, data: { totalDonations: total } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllSubmissions = async (req, res) => {
  try {
    const questionnaires = await DonationQuestionnaire.findAll({
      include: [
        { model: User, as: "user", attributes: { exclude: ["password"] } },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ success: true, data: questionnaires });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

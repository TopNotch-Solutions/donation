const User = require("./user");
const { DonationQuestionnaire } = require("./donationQuestionnaire");
const { QuestionnaireAnswer } = require("./questionnaireAnswer");

User.hasMany(DonationQuestionnaire, { foreignKey: "userId", as: "questionnaires" });
DonationQuestionnaire.belongsTo(User, { foreignKey: "userId", as: "user" });

DonationQuestionnaire.hasMany(QuestionnaireAnswer, { foreignKey: "questionnaireId", as: "answers" });
QuestionnaireAnswer.belongsTo(DonationQuestionnaire, { foreignKey: "questionnaireId", as: "questionnaire" });

module.exports = { User, DonationQuestionnaire, QuestionnaireAnswer };

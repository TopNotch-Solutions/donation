const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const QuestionnaireAnswer = sequelize.define("questionnaire_answers", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  questionnaireId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = { QuestionnaireAnswer };

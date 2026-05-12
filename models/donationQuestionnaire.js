const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DonationQuestionnaire = sequelize.define("donation_questionnaires", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "rejected"),
    defaultValue: "pending",
  },
  reviewedBy: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  reviewedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reviewNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = { DonationQuestionnaire };

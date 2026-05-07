const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Response = sequelize.define("responses", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.BIGINT, allowNull: false },
  questionId: { type: DataTypes.INTEGER, allowNull: false },
  booleanValue: { type: DataTypes.BOOLEAN, allowNull: true },
  textValue: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = { Response };

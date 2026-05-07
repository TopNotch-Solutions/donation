const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// 1. Admin creates the questions here
const Question = sequelize.define("questions", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
    type: { 
        type: DataTypes.ENUM('boolean', 'text', 'consent'), 
        allowNull: false 
    },
    category: { type: DataTypes.STRING, defaultValue: "General" }
}, { timestamps: false });


module.exports = { Question};
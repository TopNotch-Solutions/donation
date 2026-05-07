const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.ENUM('Mr', 'Mrs', 'Ms', 'Dr', 'Prof'),
            allowNull: false
        },
        initials: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        callingName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        previousSurname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY, // Stores YYYY-MM-DD without time
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ethnic: {
            type: DataTypes.ENUM('Asian', 'African', 'Caucasian', 'Hispanic', 'Indian', 'Coloured'),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true // Optional
        },
        // Contact & Address
        physicalAddress: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        postalAddress: {
            type: DataTypes.TEXT,
            allowNull: true // Optional
        },
        cellphone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        homeNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        workNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Medical / Care Information
        careType: {
            type: DataTypes.ENUM('State', 'Private'),
            allowNull: false
        },
        doctorName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        doctorNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emergencyContact: {
            type: DataTypes.STRING, // Name and/or Number
            allowNull: false
        },
        // Donor Information
        donorNumber: {
            type: DataTypes.STRING,
            allowNull: true // Optional
        },
        isPreviousDonor: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        lastDonationPlace: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastDonationDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        totalDonations: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        timestamps: false 
    }
);

module.exports = User;
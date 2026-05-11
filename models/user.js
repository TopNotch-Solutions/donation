const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");

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
        idNumber:{
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [8, 100] // Added a basic length validation
            }
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
        timestamps: false,
        hooks: {
            beforeSave: async (user) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    }
);

User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = User;
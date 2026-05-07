const { User } = require("../models/user");
const { Response } = require("../models/response");
const { Question } = require("../models/question");

// 1. GET TOTAL SUBMISSIONS (Summary List)
exports.getSubmissionSummary = async (req, res) => {
    try {
        // Fetches users who have at least one response
        const submissions = await User.findAll({
            attributes: ['id', 'firstName', 'surname', 'cellphone', 'totalDonations'],
            include: [{
                model: Response,
                required: true, // Only returns users who have submitted a questionnaire
                attributes: ['createdAt']
            }]
        });

        res.status(200).json({
            success: true,
            totalSubmissions: submissions.length,
            data: submissions
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2. REVIEW SPECIFIC USER (Detailed Questionnaire + Past Donation History)
exports.getUserReview = async (req, res) => {
    try {
        const userId = req.params.userId;

        const reviewData = await User.findByPk(userId, {
            // Includes all user info + all their questionnaire answers
            include: [{
                model: Response,
                include: [Question] // This joins the Question text to the Response
            }]
        });

        if (!reviewData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Custom formatting for the Admin view
        const response = {
            personalInfo: {
                fullName: `${reviewData.firstName} ${reviewData.surname}`,
                dob: reviewData.dateOfBirth,
                totalDonations: reviewData.totalDonations,
                lastDonation: reviewData.lastDonationDate
            },
            questionnaire: reviewData.responses.map(r => ({
                question: r.question.text,
                answer: r.question.type === 'boolean' ? (r.booleanValue ? "Yes" : "No") : r.textValue,
                dateSubmitted: r.createdAt
            }))
        };

        res.status(200).json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const User = require("../models/user"); // Adjust path as needed
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please provide an email and password" });
        }

        // 2. Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // 3. Check password using the method we added to the Model prototype
        // (Or use bcrypt.compare directly if you didn't add the prototype method)
        const isMatch = await user.validPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // 4. Create Token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'your_super_secret_key',
            { expiresIn: '1d' } // Token expires in 1 day
        );

        // 5. Send response (excluding password)
        const userData = user.toJSON();
        delete userData.password;

        res.status(200).json({
            success: true,
            token,
            user: userData
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
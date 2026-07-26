let signinModel = require("../model/signInModel.js");
exports.findUserByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        let users = await signinModel.findUserByEmail(email, password);
        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }
        let user = users[0];
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Login Successfully ✅",
            userId:user.id
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
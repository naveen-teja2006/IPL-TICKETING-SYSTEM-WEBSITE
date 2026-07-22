let registerModel = require("../model/registerModel.js");
exports.insertUsers = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await registerModel.insertUsers(username, email, password);
        res.status(201).json({ message: "User Registered Successfully" });
    }
    catch (error) {
        if (error.code == "ER_DUP_ENTRY") {
            res.status(409).json({ message: "User Already Exists" });
            return;

        }
        return res.status(500).json({ message: error.message });
    }
}
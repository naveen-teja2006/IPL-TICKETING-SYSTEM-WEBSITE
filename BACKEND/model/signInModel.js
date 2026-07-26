let db = require("../config/db.js");
exports.findUserByEmail = async(email,password) =>{
    let sql = "SELECT id,email,password FROM Users WHERE email = ? AND password = ?";
    let [rows] = await db.promise().query(sql,[email,password]);
    return rows;
};
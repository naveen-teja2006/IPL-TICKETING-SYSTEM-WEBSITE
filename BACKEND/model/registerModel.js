let db = require("../config/db.js");
exports.insertUsers = async(username,email,password) =>{
    let sql = "INSERT INTO Users(username,email,password) VALUES(?,?,?)";
    await db.promise().query(sql,[username,email,password]);
}
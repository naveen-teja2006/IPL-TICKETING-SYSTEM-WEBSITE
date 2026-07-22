let db = require("../config/db");
exports.getAllMatches = async() =>{
    let sql = "SELECT * FROM Matches";
    let [rows] = await db.promise().query(sql);
    return rows;
}

exports.getAllMatchesById = async(id) =>{
    let sql = "SELECT * FROM Matches WHERE id = ?";
    let [rows] = await db.promise().query(sql,[id]);
    return rows;
}
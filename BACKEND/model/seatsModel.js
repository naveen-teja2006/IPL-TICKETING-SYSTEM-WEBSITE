let db = require("../config/db");
exports.getAllSeatsById = async(matchId) =>{
    let sql = "SELECT * FROM Seats WHERE match_id = ? ";
    let [rows] = await db.promise().query(sql,[matchId]);
    return rows;
}
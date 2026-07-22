let dotenv = require("dotenv");
dotenv.config();
let mysql2 = require("mysql2");
let db = mysql2.createConnection({
    host:"localhost",
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});
db.connect((err) =>{
    if(err){
        console.log(err);
        console.log( "Error Connecting To The Database");
    }
    else{
        console.log("Database Connected Successfully")
    }
})
module.exports = db;
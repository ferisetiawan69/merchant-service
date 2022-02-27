const mysql = require("mysql");
// mySql Database Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "FSqa7100##**",
    database : "merchantservice_ferisetiawan",
    port :"3306"
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL is connected");
});

module.exports = db;
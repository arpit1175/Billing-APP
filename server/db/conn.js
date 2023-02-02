const mysql = require("mysql2");

const conn = mysql.createConnection({user : "root",
host:"localhost",
password:"mysql",
database:"billing"})

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB conncted")
});

module.exports = conn;
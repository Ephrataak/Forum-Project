const mysql = require("mysql");
var connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DB,
});
connection.getConnection(function (err, connection) {
  console.log("connected with the database!");
});

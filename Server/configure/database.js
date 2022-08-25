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
const table_registration = `CREATE TABLE if not exists registration(
  user_id int auto_increment,
  user_name VARCHAR(255) not null,
  user_email VARCHAR(255) not null,
  pass VARCHAR(255) not null,
  PRIMARY KEY(user_id)
  )`;
const table_profile = `CREATE TABLE if not exists profile(
  user_profile_id int auto_increment,
  user_id int not null,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  PRIMARY KEY (user_profile_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
const table_answer = `CREATE TABLE if not exists answer(
  answer_id int auto_increment,
  answer varchar(500) not null,
  answer_code_bi varchar(255) not null,
  user_id int not null,
  question_id int not null,
  PRIMARY KEY(answer_id),
  FOREIGN KEY (question_id) REFERENCES question(question_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
const table_question = `CREATE TABLE if not exists question(
  question_id int auto_increment,
  question varchar(500) not null,
  question_description varchar(800),
  question_code_block varchar(255) not null,
  tags varchar(255),
  post_id varchar(255) not null,
  user_id int not null,
  PRIMARY KEY(question_id),
  UNIQUE KEY (post_id),
  FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
connection.query(table_registration, (err, result, fields) => {
  if (err) console.log(err);
  else console.log("Registration table created.")
});
connection.query(table_profile, (err, result, fields) => {
  if (err) console.log(err);
  else console.log("Profile table created.");
});
connection.query(table_question, (err, result, fields) => {
  if (err) console.log(err);
  else console.log("Question table created.");
});
connection.query(table_answer, (err, result, fields) => {
  if (err) console.log(err);
  else console.log("Answer table created.");
});

module.exports = connection;
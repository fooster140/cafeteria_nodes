const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cafeteria",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL");
});

module.exports = db;

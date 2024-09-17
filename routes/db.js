const mysql = require("mysql2");
const express = require('express');
const server = express();

var connection =  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "user",
    port: 6100,
});

  connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to MySQL Server");
    }
});
  var data = connection.query(`SELECT * FROM user`, function(err, result) {
    if (err) throw err;
    return result;
  });



server.get('/db',function(req,res){
  res.json(data);
});

module.exports = server;
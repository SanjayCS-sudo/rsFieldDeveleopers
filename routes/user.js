const mysql = require('mysql2');
const express  = require('express')
const server = express()
// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'user',
  port: '6000',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define the user schema and create the 'users' table
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

connection.query(createUserTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table created successfully');
  }

  //response
  server.get('/login',(req,res)=>{
    res.send("working");
  })


});

module.exports = server;
const express = require('express')
const server = express();
//const db = require('./routes/db');
const user = require('./routes/user')
const authRoute = require('./routes/auth');
const homePage = require('./routes/home');

const port = 8085;
const path = require('path');

//route for authentication
server.use(authRoute);

//route for homepage
server.use(homePage);
server.use(express.static('pro'))
server.use(express.static('routes'))
//connecting db
server.use(user);
server.use(express.static(path.join(__dirname, 'routes','public')));

server.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, 'routes','public', 'map.html'));
});
server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'pro','index.html'));
  });
  server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'pro','contact.html'));
  });

  server.use(express.static(path.join(__dirname)));
    server.get('/random', (req, res) => {
    res.sendFile(path.join(__dirname,'random.txt'));
});
   

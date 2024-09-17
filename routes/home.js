const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


// Defining a route for the home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sample.html'));
});

module.exports = app;
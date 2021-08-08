const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const scoreRoutes  = require('./routes/score');

// Create express JS server 
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Add routes to access static files
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.join(__dirname, '/styles')));
app.use(express.static(path.join(__dirname, '/src')));

//Setup routing for Tetris Application
app.use(adminRoutes);
app.use(scoreRoutes);

// Start Listening at port number 3000
app.listen(3000);
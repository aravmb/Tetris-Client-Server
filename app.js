const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const tetrisRoutes = require('./routes/tetris')

// Create express JS server 
const app = express();

// Add routes to access static files
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.join(__dirname, '/styles')));
app.use(express.static(path.join(__dirname, '/src')));

//Setup routing for Tetris Application
app.use(adminRoutes);
app.use(tetrisRoutes);

// Start Listening at port number 3000
app.listen(3000);
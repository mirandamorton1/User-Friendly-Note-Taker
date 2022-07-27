// require express
const express = require('express');
const path = require('path'); 

// require your routes - for the api
const apiRoutes = require('./routes/apiRoutes');

// require you routes - for the html
const htmlRoutes = require('./routes/htmlRoutes');

// initialize the app
const app = express();

// create a port - reference server.js files from activities in this module
const PORT = process.env.PORT || 3001;

// set up body parsing, static, and route middleware - activities 15 and 16
// Middleware for parsing application/json
app.use(express.json());

// Middleware for urlencoded data
app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes); // activities 21 and 22


//static 
app.use(express.static('public'));


// start the server on the port - app.listen - reference server.js files from activites in this module
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

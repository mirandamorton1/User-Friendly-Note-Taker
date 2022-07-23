// require express
// require your routes - for the api
// require you routes - for the html

// initialize the app
// create a port - reference server.js files from activities in this module

// set up body parsing, static, and route middleware - activities 15 and 16
app.use('/api', apiRoutes);
app.use('/', htmlRoutes); // activities 21 and 22

// start the server on the port - app.listen - reference server.js files from activites in this module
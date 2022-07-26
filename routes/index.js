const express = require('express');

const apiRouter = require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');

const app = express();

app.use('/apiRoutes', apiRouter);
app.use('/htmlRoutes', htmlRouter);

module.exports = app;
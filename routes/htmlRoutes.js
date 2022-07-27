// require path
const path = require('path');

const express = require('express');
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
const router = express.Router();

// const htmlRouter = require('./htmlRoutes'); need this?


// set up a route for /notes that responds with the notes.html file
router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// for any other routes, using * as the path, you can respond with the index.html file
router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;
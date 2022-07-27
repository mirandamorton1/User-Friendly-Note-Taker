// require router from express - activity 21 and 22, specifically in the routes in activity 22
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
// const router = express.Router();
const express = require('express');
const router = express.Router();

const uuid = require('../helpers/uuid');

// require store from the helpers folder 
const store = require('../helpers/store');


// GET ALL THE NOTES //
router.get('/notes', (req, res) => {
  store
  .getNotes(req.body)
  .then((note) => {
    res.json(note);
  })
    // getNotes()
    // then take the notes and return them with res.json
})

// POST A NEW NOTE //
router.post('/notes', (req, res) => {
  store
  .addNote(req.body)
  .then((note) => {
    res.json(note);
  })
  .catch((err) => res.status(500).json(err));
    // addNote(req.body)
    // then return note with res.json
})

// DELETE A NOTE //
router.delete('notes/:id', (req, res) => {
  store
    // removeNote(req.params.id)
    // give a status letting you know it's been deleted
})

module.exports = router;
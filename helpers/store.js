// require fs
const fs = require('fs')
// require util
const util = require('util');

// require uuid
const uuid = require('../helpers/uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      // parse the notes and return them
    })
  }

  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("no title or text")
    }

    const newNote = { title, text, id: uuid() }; // give note an id
    return this.
    // get all notes with getNotes()
    // then add new note to them
    // then take the updated set of notes - write them to the file using write()
    // then show the new note
  }

  removeNote(id) {
    // get all the notes use getNotes()
    // then go through the notes to find the one with the matching id
    // take these updated/filtered notes - write them to file using write()
  }
}

module.exports = new Store();
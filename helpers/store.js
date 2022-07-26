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
    return readFileAsync('db/notes.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/notes.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      // parse the notes and return them
      let parsedNotes;
      try {
        parsedNotes= [].concat(JSON.parse(notes));
      }
      catch(err){
        parsedNotes=[];
      }
      return parsedNotes;
    })
  }

  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("no title or text")
    }

    const newNote = { title, text, id: uuid() }; // give note an id
    return this.getNotes()
    .then((notes) => [...notes, newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
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
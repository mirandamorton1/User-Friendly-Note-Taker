// require fs
// require util
// require uuid
const util = require('util');

const uuidv1 = require('uuid/v1');

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

    const newNote = { title, text, id: uuidv1() }; // give note an id

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
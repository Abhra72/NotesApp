const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length !== 0) return console.log(chalk.red('Duplicate title'))

    notes.push({
       title: title,
       body: body 
    })
    console.log(notes)
    saveNotes(notes)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log(chalk.blueBright('new note added'))
}

const loadNotes = function () {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // console.log(e)
        return []
    }   
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
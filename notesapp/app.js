const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
// const getNotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
         notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log(chalk.magenta('Title: '+ argv.title))
    }
})

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: function () {
        console.log(chalk.magenta('listing all the notes here', argv))
    }
})

yargs.command({
    command: 'read',
    describe: 'reading out all the notes',
    handler: function () {
        console.log(chalk.magenta('reading out the notes', argv))
    }
})

yargs.parse()
const chalk = require('chalk')
const yargs = require('yargs')
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
    handler: function () {
        console.log(chalk.inverse.cyan('Title: '+ argv.title))
        console.log(chalk.inverse.cyan('Body: '+ argv.body))
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
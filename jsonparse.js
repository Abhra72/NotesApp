const chalk = require('chalk')
const fs = require('fs')

// const book = {
//     title: 'Harry Potter and the Order of the Pheonix',
//     author: 'J. K. Rowling'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('boknote', bookJSON)

const databuffer =  fs.readFileSync('boknote')
// console.log(chalk.magenta(databuffer.toString())) 
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(chalk.yellow.inverse(data.name))
console.log(chalk.greenBright(data.age))
console.log(chalk.blue(data.planet))
// console.log(chalk.red(data))
const path = require('path')

console.log(path.sep) // '.sep' stands for separator (/)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath) // this shows the full path of the folders and file.

const base = path.basename(filePath)
console.log(base) // this only shows the file name (maybe the last part of the chain)?

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

// CommonJS - every file in Node is a module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade') // not assigned to a variable...
sayHi('Susan')
sayHi(names.john)	// have to use the name of the const ('john') to get the capitalised version.
sayHi(names.peter)	// same as above.

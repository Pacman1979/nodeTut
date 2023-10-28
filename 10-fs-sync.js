// This is the synchronous approach. Everything done line by line, which means if there is a hold up anywhere it starts the whole application.
// This file reads the files in 'const first' and 'const second'.
const { readFileSync, writeFileSync } = require('fs'); // readFileSync and writeFileSync are methods and we need to provide 2 parameters.
console.log('start')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// This function writes to a file.
writeFileSync(
	'./content/result-sync.txt', // this file is created if it doesn't already exist.
	// 'first' and 'second' is what goes into the next text file.
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' } // I think this means that text gets added to the file in addition to any existing text as opposed to being overwritten.
)

console.log('done with this task')
console.log('starting the next one')

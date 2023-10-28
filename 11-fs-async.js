// This is the asynchronous approach, which means that if there is a hold up anywhere the rest of the code in the application can still run.
// This file reads the files in the const's.
const { readFile, writeFile } = require('fs'); // readFileSync and writeFileSync are methods and we need to provide 2 parameters.

console.log('start');
// callback - when all functionality is complete we run the callback. E.g. callback function runs every time we click on a button when using an eventListener??

readFile('./content/first.txt', 'utf8', (err, result) => { // the third argument is a callback function and we pass in 2 more arguments.
	if(err){
		console.log(err)
		return
	}
	const first = result;

	readFile('./content/second.txt', 'utf8', (err, result) => { // the third argument is a callback function and we pass in 2 more arguments.
		if(err){
			console.log(err)
			return
		}
		const second = result;

		writeFile(
			'./content/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err)
					return
				}
				console.log('done with this task')
			}
		)
	})
})
console.log('starting the next task')

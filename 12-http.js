const http = require('http');

const server = http.createServer((req, res) => { // req = requesting, res = response
	if(req.url === '/'){
		res.end('Welcome to our home page') // ends request.
	}
	if(req.url === '/about'){
		res.end('Here is our short history')
	}
	res.end(`
		<h1>Oops!</h1>
		<p>We can't seem to find the page you're looking for</p>
		<a href="/">back home</a>
	`)
})

server.listen(3000) // another method where the server is listening to port 5000

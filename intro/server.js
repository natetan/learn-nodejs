// http is built into node (no node_module for it required)
var http = require('http');

// Creates a server with a request and a response
var server = http.createServer(function(req, res) {
	console.log('got a request!');
	res.write('hi there');
	res.end();
});

// Opens on port 3000
server.listen(3000);
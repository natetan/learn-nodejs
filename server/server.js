var http = require('http');

let port = 3000;
var server = http.createServer(function(req, res) {
  console.log('currently listening on port ' + port);

  // sends a response (status code) and the type of the response
  res.writeHead(200, {'Context-type':  'text/plain'});
  res.write('Hello there. This is a web server');

  // the response is over and is sent off
  res.end();
});

server.listen(port);
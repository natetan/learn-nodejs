/*
  This simulates multiple queries to a server that has a response time of 3 seconds
*/

function makeRequest(requestNumber) {
  console.log('Request number: ' + requestNumber);
  handleRequest(function() {
    console.log('Request ' + requestNumber + ' finished');
  });
}

// Simulate a server response time of 3 seconds
// Instead of handling a request, waiting for 3 seconds, then doing another, 
// it handles more requests while waiting for the server to respond
// When the request is done, it does the callback
function handleRequest(callback) {
  setTimeout(callback, 3000);
}

for(var i = 1; i <= 5; i++) {
  makeRequest(i);
}
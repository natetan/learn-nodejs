# Repo for learning Nodejs

## Get Node [here](http://blog.teamtreehouse.com/install-node-js-npm-mac)

## Installation Details
- ```npm install``` (installs all modules found in package.json)
- ```npm install package_name``` (installs package locally)
- ```npm install -S package_name``` (installs package locally and saves it to package.json)

### Introduction

- modules
- require
- export
- `node file.js`
- npm init  (package.json)
- npm install (-S)
- web server example

#### module1.js
```JavaScript
// Whatever gets exported from module2 is passed into the m2 variable
var m2 = require('./module2');
// will look through node_modules
var $ = require('jquery');
console.log(m2);
m2();
```

#### module2.js
```JavaScript
var a = 1;

/*
module.exports.a = a;
module.exports.b = 2;
*/

module.exports = function() {
	console.log('module 2');
};
```

#### server.js (web server example)
```JavaScript
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
```
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

### Basic js for Node

#### JavaScript Objects
```JavaScript
var hero = (
  name: 'Percy',
  age: 16,
  heritage: 'Greek'
);

console.log(hero.name); // Percy
console.log(hero); // { name: 'Percy', age: 16, heritage: 'Greek' }
```

#### Anonymous Functions
```JavaScript
var printSomething = function() {
  console.log('Welcome to the Isles of the Blest');
};

// Passing them into parameters

setTimeout(function() {
  console.log('This message appeared in 3 seconds');
}, 3000);
```

#### Object References
- Everything is a reference
```JavaScript
var Yulong = (
  age: 21,
  gender: 'male'
);

var someoneElse = Yulong;
console.log(Yulong.age); // 21
console.log(someoneElse.age); // 21

// someoneElse is not a copy of Yulong, but a reference, so it changes Yulong's age 
someoneElse.age = 16;
console.log(Yulong.age); // 16
```

#### Equality
- == and ===

```JavaScript
// == compares only values
console.log(13 == '13'); // true

// === compares value and type
console.log(13 ===  '13'); // false
```

#### Objects and Prototype
```JavaScript
// this keyword refers to whatever is calling it (User)
function User(name) {
  this.name = name;
  this.balance = 100;
  this.transfer = function(user, amount) {
    if (amount > 0 && amount <= this.balance) {
      user.balance += amount;
      this.balance -= amount;
      console.log(this.name + ' gave ' + amount + ' to ' + user.name);
    }
  };
}

var Percy = new User('Percy');
var Annabeth = new User('Annabeth');
console.log('Percy balance: ' + Percy.balance); // 100
console.log('Annabeth balance: ' + Annabeth.balance); // 100
Percy.transfer(Annabeth, 10);
console.log('Percy balance: ' + Percy.balance); // 90
console.log('Annabeth balance: ' + Annabeth.balance); // 110

// Prototype can add another function or field/property to an object
User.prototype.credit = 'good';
User.prototype.steal = function(user, amount) {
  if (amount <= user.balance) {
    this.balance += amount;
    user.balance -= amount;
    console.log(this.name + ' just stole ' + amount + ' from ' + user.name);
  }
};

Percy.steal(Annabeth, 10);
console.log('Percy balance: ' + Percy.balance);
console.log('Annabeth balance: ' + Annabeth.balance);

/* 
  Final Output

  Percy balance: 100
  Annabeth balance: 100
  Percy gave 10 to Annabeth
  Percy balance: 90
  Annabeth balance: 110
  Percy just stole 10 from Annabeth
  Percy balance: 100
  Annabeth balance: 100
*/
```

### Handling requests concurrently
- Handle other requests while waiting for a response

```JavaScript
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

/* 
  Output (node app.js)

  Request number: 1
  Request number: 2
  Request number: 3
  Request number: 4
  Request number: 5
  Request 1 finished
  Request 2 finished
  Request 3 finished
  Request 4 finished
  Request 5 finished
/*


```

### Using Expressjs  
Expressjs loads your entire web server/application in memory

#### Installation

1. ```npm install -g express-generator```
2. ```express folder_name --hogan -c less```
3. ```cd folder_name && npm install```

##### Options
- add ```sudo``` to the front if the global installation gets an error
- hogan uses hogan templating (similar to Mustachejs) instead of the jade default
- c for css
- supports less, stylus, and sass

#### Running the application
- ```DEBUG=express-intro:* npm start```

##### index.hjs
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Welcome to {{ title }}</h1>
    <p>{{ desc }}</p>
  </body>
</html>
```

##### index.js
```JavaScript
var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET request of /
router.get('/', function(req, res) {

	// templating, takes a view and values in json
	// title is a variable from index.hjs
	res.render('index', {
		title: 'Isles of the Blest',
		desc: 'You godlings will have fun here',
	});

});

// GET request of /users
// Sends json file of the users
router.get('/users', function(req, res) {
	res.send({
		users: ['Percy', 'Annabeth']
	});
});

// Post request
router.post('/', function(req, res) {
	// Get all the post queries
	// query is all the params that came in
	// req.query.param
});

module.exports = router;
```

##### app.js

```JavaScript
// Requiring our dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Requiring our routes
var index = require('./routes/index');
// var users = require('./routes/users');

// Creating our app by running express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Use our routes here
// Use index for all of our request paths
app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```
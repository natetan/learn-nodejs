// Whatever gets exported from module2 is passed into the m2 variable
var m2 = require('./module2');
// will look through node_modules
var $ = require('jquery');
console.log(m2);
m2();
// Objects in js

var person = {
  name: 'Yulong',
  age: 21,
};

console.log(person); // { name: 'Yulong', age: 21 }
console.log(person.name); // Yulong

// Setting variables to anonymous functions

var printStuff = function() {
  console.log('This is an anonymous function');
};

printStuff();

// Passing it into setTimeout (3 seconds later)

setTimeout(printStuff, 3000);


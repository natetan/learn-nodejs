function printUsers() {
  console.log('Here are some users');
}

function doNothingUseful() {
  console.log('Does nothing useful');
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.desc = function() {
    if (this.age > 0) { 
      console.log(this.name + ' is ' + this.age + ' years old');
    } else {
      console.log('You can\'t have a negative age, silly');
    }
  }
}

function createPerson(name, age) {
  return new Person(name, age);
}

// module.exports.print = printUsers;
// module.exports.createPerson = createPerson;

// When there are multiple things to export
module.exports = {
  print: printUsers,
  createPerson: createPerson
};
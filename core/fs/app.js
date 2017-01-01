// fs - filesystem

let fs = require('fs');

var createMessage = function(fileName, content) {
  fs.writeFileSync(fileName, content);
  console.log(fileName + ' was created with content: ' + content);
}

createMessage('test.txt', 'i just created this file with node');
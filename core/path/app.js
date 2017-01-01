let path = require('path');

let webs = '~/dev///webs/node/learn-nodejs/examples/bank/Bank.js'; // BAD path
console.log(path.normalize(webs));
console.log(path.dirname(webs));
console.log(path.basename(webs));
console.log(path.extname(webs));

// Helpful constants
console.log(__dirname); // this current directory
console.log(__filename); // this current filename
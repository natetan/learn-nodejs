var Bank = require('./Bank');
var account = Bank.createBankAccount('Yulong', 0, 500);
console.log(account);
console.log(account.balance);
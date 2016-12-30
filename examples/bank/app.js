var Bank = require('./Bank');
let per = Bank.createBankAccount('Percy', 0, 500);
let ann = Bank.createBankAccount('Annabeth', 1, 1000);
console.log(per.getBalance());
console.log('Percy balance: ' + per.balance);
console.log('Annabeth balance: ' + ann.balance);
per.transfer(ann, 100);
console.log('Percy balance: ' + per.balance);
console.log('Annabeth balance: ' + ann.balance);
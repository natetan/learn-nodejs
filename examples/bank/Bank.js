// deposit's default value is 0 if it is not defined
// this acts like a second constructor with less arguments
function Bank(name, id, deposit = 0) {
  this.name = name;
  this.id = id;
  this.balance = deposit;
  this.transactions = 0;
  this.getId = function() {
    return this.id;
  };
  this.getBalance = function() {
    return this.balance;
  };
  this.getTransactions = function() {
    return this.transactions;
  };
  this.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions++;
      console.log(amount + ' was deposited to ' + this.name + '\'s account');
    }
  };
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions++;
      console.log(amount + ' was withdrawn from ' + this.name + '\'s account');
    }
  };
  this.transfer = function(bank, amount) {
    if (this.balance >= 5 && amount > 0) {
      this.balance -= 5;
      if (amount > this.balance) {
        bank.balance += this.balance;
        this.balance = 0;
      } else {
        bank.balance += amount;
        this.balance -= amount;
      }
      this.transactions++;
      bank.transactions++;
      console.log(this.name + ' transfered ' + amount + ' to ' + bank.name);
    }
  };
}

function createBankAccount(name, id, deposit) {
  return new Bank(name, id, deposit);
}

module.exports.createBankAccount = createBankAccount;
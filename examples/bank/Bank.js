function Bank(name, id) {
  return new Bank(name, id, 0);
}

function Bank(name, id, deposit) {
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
    }
  };
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions++;
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
    }
  };
}

function createBankAccount(name, id, deposit) {
  return new Bank(name, id, deposit);
}

module.exports.createBankAccount = createBankAccount;
// Objects are used as functions
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
console.log('Percy balance: ' + Percy.balance);
console.log('Annabeth balance: ' + Annabeth.balance);
Percy.transfer(Annabeth, 10);
console.log('Percy balance: ' + Percy.balance);
console.log('Annabeth balance: ' + Annabeth.balance);

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


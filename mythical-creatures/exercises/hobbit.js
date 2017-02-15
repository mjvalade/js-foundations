function Hobbit(name, disposition, age, adult, isShort, old){
  this.name = name;
  this.disposition = disposition || 'homebody';
  this.age = age || 0;
  this.adult = false;
  this.isShort = true;
  this.old = false;
  this.hasRing = this.name === 'Frodo' || false;
}

Hobbit.prototype.celebrateBirthday = function() {
  this.age++;
  if (this.age >= 33) {
    this.adult = true;
  }
  if (this.age > 100) {
    this.old = true;
  }
};

module.exports = Hobbit;

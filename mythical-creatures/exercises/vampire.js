function Vampire(name, pet, thirsty) {
  this.name = name;
  this.pet = pet || "bat";
  this.thirsty = thirsty || true;
}

Vampire.prototype.drink = function() {
  if(this.thirsty === true) {
    console.log('thirsty status:', this.thirsty);
    this.thirsty = false;
    console.log('thirsty status:', this.thirsty);
  }
};

module.exports = Vampire;

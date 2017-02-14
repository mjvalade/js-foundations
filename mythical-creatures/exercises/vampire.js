function Vampire(name, pet, thirsty) {
  this.name = name;
  this.pet = pet || "bat";
  this.thirsty = thirsty || true;
}

Vampire.prototype.drink = () => {
  return this.thirsty = false;
};


module.exports = Vampire;

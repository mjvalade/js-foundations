class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
  }

  eat() {
    if(this.hungry === true){
      console.log('hungry status:', this.hungry);
      this.hungry = false;
      console.log('hungry status:', this.hungry);
    }
  }
}

// var dragon = new Dragon('Lady Vox');
// dragon.eat();

module.exports = Dragon;

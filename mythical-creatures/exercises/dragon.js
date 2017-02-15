class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.hungryCount = 0;
  }

  eat() {
    if(this.hungryCount < 3){
      this.hungryCount++;
      console.log('hungry status:', this.hungry);
    }
    if(this.hungryCount === 3){
      this.hungry = false;
      console.log('hungry status:', this.hungry);
    }
  }
}

module.exports = Dragon;

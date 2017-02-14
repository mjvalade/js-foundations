function Hobbit(name, disposition, age, adult, isShort, old){
  this.name = name;
  this.disposition = disposition || 'homebody';
  this.age = age || 0;
  this.adult = () => {
    if(this.age >= 33){
      return true;
    } else return false;
  };
  this.isShort = true;
  this.old = function(){
    if(this.age >= 101){
      return true;
    } else return false;
  };
}

Hobbit.prototype.celebrateBirthday = function() {
  this.age++;
};

module.exports = Hobbit;

function Unicorn(name, color) {
  this.name = name;
  this.color = color || 'white';
}

Unicorn.prototype.isWhite = () => {
  if (this.color === "white") {
    return;
  } else {
    return false;
  }
};

Unicorn.prototype.says = function(stuff) {
  return ("**;* " + stuff + " *;**");
};


module.exports = Unicorn;

const Enclosure = function() {
  this.enclosure = [];

}

Enclosure.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
};

module.exports = Enclosure;

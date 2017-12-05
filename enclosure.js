const Enclosure = function() {
  this.enclosure = [];

}

Enclosure.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
};

Enclosure.prototype.removeSpecies = function(species) {
  for(var type of this.enclosure){
    if(type.species === species){
      this.enclosure.splice(this.enclosure.indexOf(type.species))
    }
  }
};


Enclosure.prototype.findDinosaursByMaxOffspring = function(offspring) {
  var list = [];
  for(var dino of this.enclosure){
    if(dino.maxOffspring >= offspring){
      list.push(dino);
    }
  }
  return list;
};


module.exports = Enclosure;

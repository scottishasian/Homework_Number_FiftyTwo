const Dinosaur = require('../dinosaur.js');
const Enclosure = require('../enclosure.js');
const assert = require('assert');

describe('Enclosure', function() {
  let dinosaur;
  let enclosure;

  beforeEach('Dinosaur', function() {
    enclosure = new Enclosure();
    dinosaur = new Dinosaur("Velociraptor", 'Clever Girl', 3);
    dinosaur2 = new Dinosaur("Velociraptor", 'Derrick', 3);
    dinosaur3 = new Dinosaur("Stegasaurus", 'Sharon', 1);
  });

  it("Should be empty", function() {
    assert.strictEqual(enclosure.enclosure.length, 0)
  });

  it("Should be able to add one dinosaur", function() {
    enclosure.addDinosaur(dinosaur);
    assert.strictEqual(enclosure.enclosure.length, 1)
  });

  it("Should be able to remove all Velociraptors", function() {
    enclosure.addDinosaur(dinosaur);
    enclosure.addDinosaur(dinosaur2);
    enclosure.addDinosaur(dinosaur3);
    assert.strictEqual(enclosure.enclosure.length, 3)
    enclosure.removeSpecies("Velociraptor");
    assert.strictEqual(enclosure.enclosure.length, 1)
  })

});

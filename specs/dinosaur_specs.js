const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function() {
  let dinosaur;

  beforeEach('Dinosaur', function() {
    dinosaur = new Dinosaur("Velociraptor", 'Clever Girl', 3);
  });

  it("Should have a species", function() {
    assert.strictEqual(dinosaur.species, "Velociraptor");
  })



});

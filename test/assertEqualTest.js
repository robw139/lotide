const assertEqual = require("../assertEqual")
const assert = require('chai').assert;
// test one
// assertEqual("Bootcamp","Bootcamp");
// assertEqual(1,2);

describe("#assertEqual", () => {
  it("returns true for bootcamp bootcamp", () => {
    assert.strictEqual(assertEqual("Bootcamp","Bootcamp"));
  });
});
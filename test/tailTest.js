const tail = require("../tail")

// let test = [1,2,3,4,5,6,7];
// console.log(tail(test));
// console.log(test);

const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 2,3,4,5 for [1, 2, 3,4,5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2,3,4,5]);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});
const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

// testArray = [1,2,3,4,5]

// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1,2]),[]));
// console.log(assertArraysEqual(middle(testArray),[3]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]));
// console.log(testArray)

const assert = require('chai').assert;


describe("#middle", () => {
  it("returns 3 for [1, 2, 3,4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});
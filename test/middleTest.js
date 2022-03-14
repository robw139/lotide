const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

testArray = [1,2,3,4,5]

console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([1,2]),[]));
console.log(assertArraysEqual(middle(testArray),[3]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]));
console.log(testArray)
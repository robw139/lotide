const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};




module.exports = assertEqual;

const eqArrays = require("../eqArrays");

const assertArraysEqual = function(arr1T,arr2T){
  if (eqArrays(arr1T,arr2T)) {
    console.log(`😀😀😀Assertin Passed: ${arr1T} === ${arr2T}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${arr1T} !== ${arr2T}`);
  }
}

assertArraysEqual([2,2,3],[1,2,3]);
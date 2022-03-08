const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    //test = true;
    for (let x = 0; x < arr1.length; x++){
      if (arr1[x]!==arr2[x]){
        return false;
      }      
    }
  } else {
    return false;
  }
  return true;
}

const assertArraysEqual = function(arr1T,arr2T){
  if (eqArrays(arr1T,arr2T)) {
    console.log(`😀😀😀Assertin Passed: ${arr1T} === ${arr2T}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${arr1T} !== ${arr2T}`);
  }
}

assertArraysEqual([2,2,3],[1,2,3]);

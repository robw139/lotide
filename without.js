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


const without = function(sourceArray,itemsToRemove){
  let finalArray = sourceArray.slice();
 for (let x =0; x<itemsToRemove.length; x++){
    for (let y = 0; y<finalArray.length; y++){
       if (itemsToRemove[x]===finalArray[y]){
        finalArray.splice(y,1)
     }
    }
 }
console.log(finalArray);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["1", "2", "3"], [1, "2", 3]) // => ["1", "2"]
without(["1", "2", "3","4"], [1, "2", "4"]) // => ["1", "2"]
without(["1", "2", "3"], ["1", "2", 3]) // => ["1", "2"]
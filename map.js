const words = ["ground", "control", "to", "major", "tom"];

const ourMap = function(array,callback){

  const results = [];
for (let item of array){
results.push(callback(item));
}

  return results;
}


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


let results = ourMap(words,(x)=>x[0]);
console.log(assertArraysEqual(results, ['g', 'c', 't', 'm', 't']),true);
results = ourMap(words,(x)=>x.length);
console.log(assertArraysEqual(results, [6, 7, 2, 5, 3]),true);
results = ourMap(words,(x)=>x.toUpperCase());
console.log(assertArraysEqual(results, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']),true);
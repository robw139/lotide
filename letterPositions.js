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



const letterPositions = function(sentence) {
  const results = {};
  let arr = []
  for (let char of sentence){
    results[char]=[];
  }
  
   for (let x=0;x<sentence.length; x++){
     results[sentence[x]].push(x);
       
     
   
   //results[char]=arr;
  }
  delete results[" "];
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
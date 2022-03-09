const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str1){
  
  let newObj = {};
  for (let c of str1){
    newObj[c]=0;
  }
  for (let c of str1){
    newObj[c] +=1;
  }
  delete newObj[" "];
  
}

countLetters("lighthouse in the house");

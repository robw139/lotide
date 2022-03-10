function findKeyByValue(object, value) {
  for (let key in object){
    if (object[key] === value){
      return key;
    }
  }
  return undefined;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  current: "The News",
  documentary: "hells angels"

};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The News"), "current");
assertEqual(findKeyByValue(bestTVShowsByGenre, "hells angels"), "documentary");
assertEqual(findKeyByValue(bestTVShowsByGenre, "mom"), undefined);
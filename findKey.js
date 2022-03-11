const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};

function findKey(object, callback) {
  for (let key in object){
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}


console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5),"noma"),true)// => "noma"